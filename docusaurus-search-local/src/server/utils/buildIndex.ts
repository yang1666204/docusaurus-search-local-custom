/* eslint @typescript-eslint/no-var-requires: 0 */
import lunr from "lunr";
import {
  LunrWithMultiLanguage,
  ProcessedPluginOptions,
  SearchDocument,
  WrappedIndex,
} from "../../shared/interfaces";

let pluginInitialized = false;
let plugin: lunr.Builder.Plugin | undefined;

const USER_GUIDE = [
  "docs/install",
  "docs/db-connect",
  "docs/table-design",
  "docs/data-operate",
  "docs/query-data",
  "docs/query-acceleration",
  "docs/lakehouse",
  "docs/log-storage-analysis",
  "docs/compute-storage-decoupled",
];
const Management = "docs/admin-manual";
const SQL_REFENECE = "docs/sql-manual";
const RELEASENOTES = "docs/releasenotes";

export function buildIndex(
  allDocuments: SearchDocument[][],
  {
    language,
    removeDefaultStopWordFilter,
    removeDefaultStemmer,
    zhUserDict,
    zhUserDictPath,
  }: ProcessedPluginOptions
): Omit<WrappedIndex, "type">[] {
  if (!pluginInitialized) {
    pluginInitialized = true;
    if (language.length > 1 || language.some((item) => item !== "en")) {
      require("lunr-languages/lunr.stemmer.support")(lunr);
    }
    if (language.includes("ja") || language.includes("jp")) {
      require("lunr-languages/tinyseg")(lunr);
    }
    for (const lang of language.filter(
      (item) => item !== "en" && item !== "zh"
    )) {
      require(`lunr-languages/lunr.${lang}`)(lunr);
    }
    if (language.includes("zh")) {
      const { tokenizer, loadUserDict } = require("./tokenizer");
      loadUserDict(zhUserDict, zhUserDictPath);
      require("../../shared/lunrLanguageZh").lunrLanguageZh(lunr, tokenizer);
    }
    if (language.length > 1) {
      require("lunr-languages/lunr.multi")(lunr);
    }

    if (language.length > 1) {
      plugin = (lunr as LunrWithMultiLanguage).multiLanguage(...language);
    } else if (language[0] !== "en") {
      plugin = (lunr as LunrWithMultiLanguage)[language[0] as "zh"];
    }
  }

  // Some documents may be empty (unset array item), which is not mapped.
  return new Array<SearchDocument[] | null>(allDocuments.length)
    .fill(null)
    .map((_doc, index) => allDocuments[index] ?? [])
    .map((documents) => ({
      documents,
      index: lunr(function () {
        if (plugin) {
          this.use(plugin);
        }

        if (removeDefaultStopWordFilter) {
          // Sometimes we need no English stop words,
          // since they are almost all programming code.
          this.pipeline.remove(lunr.stopWordFilter);
        }

        if (removeDefaultStemmer) {
          this.pipeline.remove(lunr.stemmer);
        }

        // Override tokenizer when language `zh` is enabled.
        if (language.includes("zh")) {
          this.tokenizer = (lunr as any).zh.tokenizer;
        }

        this.ref("i");
        this.field("t");
        this.metadataWhitelist = ["position"];

        documents.forEach((doc) => {
          // sql refenece ，user guide ，Management 权重增加，releasenote权重降低
          let boost = 1;
          if (
            doc.u.includes(Management) ||
            doc.u.includes(SQL_REFENECE) ||
            USER_GUIDE.some((item) => doc.u.includes(item))
          ){
            boost = 2
          }else if(doc.u.includes(RELEASENOTES)){
            boost = 0.8
          }
            this.add({
              ...doc,
              // The ref must be a string.
              i: doc.i.toString(),
            },{ boost });
        });
      }),
    }));
}
