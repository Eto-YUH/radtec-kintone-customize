(function () {
  "use strict";

  const ROOT_ID = "radtec-study-results-ui-prototype";
  const VIEW_ROOT_ID = "radtec-study-results-viewer";
  const DASHBOARD_ROOT_ID = "radtec-study-results-dashboard";
  const UI_VERSION = "20260706-6";

  const EVENTS_SHOW = [
    "app.record.create.show",
    "app.record.edit.show",
  ];
  const EVENTS_DETAIL = [
    "app.record.detail.show",
  ];
  const EVENTS_INDEX = [
    "app.record.index.show",
  ];
  const EVENTS_SUBMIT = [
    "app.record.create.submit",
    "app.record.edit.submit",
  ];

  const SECTIONS = [
    {
      key: "paper",
      label: "論文",
      tableCode: "Table",
      roleCode: "ドロップダウン",
      personCode: "文字列__1行__2",
      fields: [
        { code: "DOIpaper", label: "DOI", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "publishedYear", label: "発表年", type: "number", kintoneType: "NUMBER" },
        { code: "ドロップダウン", label: "著者区分", type: "select", kintoneType: "DROP_DOWN", options: ["筆頭著者", "責任著者", "共著者"] },
        { code: "文字列__1行__2", label: "著者", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "coAuthor", label: "筆頭著者＋共著者", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "Title", label: "論文タイトル", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "Journal", label: "ジャーナル名", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "ドロップダウン_7", label: "査読", type: "select", kintoneType: "DROP_DOWN", options: ["有り", "無し"] },
        { code: "採択区分", label: "採択区分", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
      ],
    },
    {
      key: "domestic",
      label: "国内発表",
      tableCode: "Table_1",
      roleCode: "ドロップダウン_1",
      personCode: "文字列__1行__4",
      fields: [
        { code: "publishedYear_1", label: "発表年", type: "number", kintoneType: "NUMBER" },
        { code: "ドロップダウン_1", label: "著者区分", type: "select", kintoneType: "DROP_DOWN", options: ["筆頭発表者", "共同演者"] },
        { code: "文字列__1行__4", label: "発表者", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "coPresenter", label: "発表者＋共同演者", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "oralTitle", label: "発表タイトル", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "Academy", label: "学会名", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "Place", label: "開催場所", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "ドロップダウン_3", label: "発表形式", type: "select", kintoneType: "DROP_DOWN", options: ["口頭発表", "ポスター発表"] },
      ],
    },
    {
      key: "international",
      label: "海外発表",
      tableCode: "Table_2",
      roleCode: "ドロップダウン_0",
      personCode: "文字列__1行__3",
      fields: [
        { code: "publishedYear_0", label: "発表年", type: "number", kintoneType: "NUMBER" },
        { code: "ドロップダウン_0", label: "著者区分", type: "select", kintoneType: "DROP_DOWN", options: ["筆頭発表者", "共同演者"] },
        { code: "文字列__1行__3", label: "発表者", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "coPresenter_0", label: "発表者＋共同演者", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "oralTitle_0", label: "発表タイトル", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "Academy_0", label: "学会名", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "Place_0", label: "開催場所", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "ドロップダウン_4", label: "発表形式", type: "select", kintoneType: "DROP_DOWN", options: ["口頭発表", "ポスター発表"] },
      ],
    },
    {
      key: "seminar",
      label: "研究会・講演",
      tableCode: "Table_3",
      roleCode: "ドロップダウン_2",
      personCode: "文字列__1行__5",
      fields: [
        { code: "publishedYear_2", label: "発表年", type: "number", kintoneType: "NUMBER" },
        { code: "ドロップダウン_2", label: "著者区分", type: "select", kintoneType: "DROP_DOWN", options: ["筆頭発表者", "共同演者"] },
        { code: "文字列__1行__5", label: "発表者", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "coPresenter_1", label: "発表者＋共同演者", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "oralTitle_1", label: "発表タイトル", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "Academy_1", label: "学会名，研究会名", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "Place_1", label: "開催場所", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "ドロップダウン_5", label: "発表形式", type: "select", kintoneType: "DROP_DOWN", options: ["口頭発表", "ポスター発表"] },
      ],
    },
    {
      key: "book",
      label: "書籍・著書",
      tableCode: "Table_0",
      roleCode: "ドロップダウン_6",
      personCode: "文字列__1行__6",
      fields: [
        { code: "publishedYear_3", label: "発表年", type: "number", kintoneType: "NUMBER" },
        { code: "ドロップダウン_6", label: "著者区分", type: "select", kintoneType: "DROP_DOWN", options: ["筆頭著者", "共同著者"] },
        { code: "文字列__1行__6", label: "執筆者", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "coPresenter_2", label: "執筆者＋共同著者", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "oralTitle_2", label: "執筆タイトル", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "Academy_2", label: "出版社名", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "文字列__複数行_", label: "出版物タイトル", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "文字列__1行__7", label: "執筆ページ", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
      ],
    },
    {
      key: "award",
      label: "表彰",
      tableCode: "Table_4",
      personCode: "文字列__1行__9",
      fields: [
        { code: "publishedYear_4", label: "受賞年", type: "number", kintoneType: "NUMBER" },
        { code: "文字列__1行__9", label: "受賞者", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "coPresenter_3", label: "受賞者＋共同著者・演者", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "oralTitle_3", label: "表彰・受賞名", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "Academy_4", label: "学会名・主催団体名", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "文字列__複数行__0", label: "対象論文・演題タイトル", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
      ],
    },
    {
      key: "grant",
      label: "外部資金",
      tableCode: "Table_5",
      personCode: "文字列__1行_",
      fields: [
        { code: "publishedYear_5", label: "採択年", type: "number", kintoneType: "NUMBER" },
        { code: "文字列__1行_", label: "研究代表者", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "coPresenter_4", label: "研究代表者＋分担者", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "oralTitle_4", label: "資金名", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "Academy_5", label: "研究期間(年)", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "文字列__複数行__1", label: "研究課題タイトル", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
      ],
    },
    {
      key: "certification",
      label: "資格・認定",
      tableCode: "Table_6",
      personCode: "文字列__1行__0",
      fields: [
        { code: "publishedYear_7", label: "取得年", type: "number", kintoneType: "NUMBER" },
        { code: "文字列__1行__0", label: "取得者", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "oralTitle_5", label: "資格・認定名", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "Academy_3", label: "認定機関", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
      ],
    },
  ];
  const CONTRIBUTOR_CHECK_SECTION_KEYS = ["paper", "domestic", "international", "seminar"];
  const HP_PUBLIC_SECTION_KEYS = ["paper", "domestic", "international", "seminar"];
  const DASHBOARD_VIEW_NAME_PATTERN = /面談|ダッシュボード|dashboard/i;

  let state = null;
  let staffNameMap = null;
  let dashboardState = null;

  const STAFF_DIRECTORY_CONFIG = {
    appId: "43",
    nameCode: "Name",
    englishNameCode: "Name_en",
  };

  const STAFF_NAME_MAP = {
    "竹上和希": "Takegami Kazuki",
    "久冨庄平": "Kudomi Shohei",
    "寺中悠": "Teranaka Yu",
    "田邊雅博": "Tanabe Masahiro",
    "伊原健一郎": "Ihara Kenichiro",
  };

  const loadStaffNameMap = async function () {
    const fallback = Object.assign({}, STAFF_NAME_MAP);
    if (!STAFF_DIRECTORY_CONFIG.appId || !window.kintone || !kintone.api) {
      staffNameMap = fallback;
      return staffNameMap;
    }

    try {
      const response = await kintone.api(kintone.api.url("/k/v1/records", true), "GET", {
        app: STAFF_DIRECTORY_CONFIG.appId,
        fields: [
          STAFF_DIRECTORY_CONFIG.nameCode,
          STAFF_DIRECTORY_CONFIG.englishNameCode,
        ],
        query: "limit 500",
      });
      (response.records || []).forEach(function (record) {
        const japaneseName = record[STAFF_DIRECTORY_CONFIG.nameCode]
          ? record[STAFF_DIRECTORY_CONFIG.nameCode].value
          : "";
        const englishName = record[STAFF_DIRECTORY_CONFIG.englishNameCode]
          ? record[STAFF_DIRECTORY_CONFIG.englishNameCode].value
          : "";
        if (japaneseName && englishName) {
          fallback[normalizeNameKey(japaneseName)] = englishName;
        }
      });
      staffNameMap = fallback;
      return staffNameMap;
    } catch (error) {
      staffNameMap = fallback;
      if (state) {
        state.notice = "職員名簿アプリの英語氏名を取得できなかったため、固定の対応表を使用しています。";
      }
      return staffNameMap;
    }
  };

  const readField = function (record, code) {
    return record[code] && record[code].value !== undefined ? record[code].value : "";
  };

  const readRows = function (record, section) {
    const rows = readField(record, section.tableCode);
    if (!Array.isArray(rows)) {
      return [];
    }
    return rows.map(function (row) {
      const values = {};
      section.fields.forEach(function (field) {
        values[field.code] = row.value[field.code] && row.value[field.code].value !== undefined
          ? row.value[field.code].value
          : "";
      });
      return values;
    });
  };

  const buildState = function (record) {
    const next = {
      name: readField(record, "name"),
      initialName: readField(record, "name"),
      notice: "",
      doiMessages: {},
      validationMessages: [],
      active: "paper",
      counts: {},
      sections: {},
    };
    SECTIONS.forEach(function (section) {
      const rows = readRows(record, section).filter(function (row) {
        return hasSubstantiveValue(section, row);
      });
      rows.forEach(function (row) {
        applyFieldDefaults(section, row);
        const role = section.roleCode ? String(row[section.roleCode] || "") : "";
        const person = section.personCode ? String(row[section.personCode] || "").trim() : "";
        if (hasSubstantiveValue(section, row) && /^筆頭/.test(role) && !person) {
          syncPersonNameByRole(section, row, next.name, true);
        }
      });
      next.counts[section.key] = countFilledRows(section, rows);
      next.sections[section.key] = rows;
    });
    return next;
  };

  const blankRow = function (section) {
    const row = {};
    section.fields.forEach(function (field) {
      row[field.code] = "";
    });
    return row;
  };

  const defaultRowForAdd = function (section) {
    const row = blankRow(section);
    applyFieldDefaults(section, row);
    syncPersonNameByRole(section, row);
    return row;
  };

  const applyFieldDefaults = function (section, row) {
    section.fields.forEach(function (field) {
      if (field.type === "select" && field.options && field.options.length > 0 && !row[field.code]) {
        row[field.code] = field.options[0];
      }
    });
  };

  const getRoleField = function (section) {
    return section.fields.find(function (field) {
      return field.code === section.roleCode;
    });
  };

  const syncPersonNameByRole = function (section, row, sourceNameOverride, silent) {
    if (!section.personCode) {
      return;
    }
    const sourceName = sourceNameOverride || (state ? state.name || state.initialName : "");
    const role = section.roleCode ? String(row[section.roleCode] || "") : "";
    if (/^(共著者|共同著者|共同演者)$/.test(role)) {
      if (section.key !== "paper") {
        row[section.personCode] = "";
      }
      if (!silent && state) {
        state.notice = section.key === "paper"
          ? "著者区分を変更しました。論文の著者名は保持しています。"
          : "共著・共同演者を選択したため、氏名欄をクリアしました。";
      }
      return;
    }
    if (String(row[section.personCode] || "").trim() !== "") {
      return;
    }
    if (!sourceName) {
      if (!silent && state) {
        state.notice = "氏名が空のため、氏名を自動入力できませんでした。";
      }
      return;
    }
    row[section.personCode] = compactJapaneseName(sourceName);
    if (!silent && state) {
      state.notice = "筆頭として氏名を自動入力しました。";
    }
  };

  const toEnglishName = function (value) {
    const text = String(value || "").trim();
    const map = staffNameMap || STAFF_NAME_MAP;
    return map[normalizeNameKey(text)] || text;
  };

  const getJapaneseNameForRow = function (row, fieldCode) {
    return row.__japaneseNameByField && row.__japaneseNameByField[fieldCode]
      ? row.__japaneseNameByField[fieldCode]
      : compactJapaneseName(state ? state.name || state.initialName : "");
  };

  const shouldShowJapaneseConvert = function (row, fieldCode) {
    const currentValue = String(row[fieldCode] || "").trim();
    const japaneseName = getJapaneseNameForRow(row, fieldCode);
    return currentValue && japaneseName && currentValue === toEnglishName(japaneseName);
  };

  const normalizeDoi = function (value) {
    return String(value || "")
      .replace(/[０-９．／：]/g, function (char) {
        const map = { "．": ".", "／": "/", "：": ":" };
        return map[char] || String.fromCharCode(char.charCodeAt(0) - 0xFEE0);
      })
      .trim()
      .replace(/^https?:\/\/(dx\.)?doi\.org\//i, "")
      .replace(/^doi:\s*/i, "")
      .replace(/[。、，,.\s]+$/g, "");
  };

  const getCrossrefYear = function (message) {
    const date = message["published-print"] || message["published-online"] || message.issued || message.created;
    return date && date["date-parts"] && date["date-parts"][0] ? String(date["date-parts"][0][0] || "") : "";
  };

  const getCrossrefAuthors = function (message) {
    return (message.author || []).map(function (author) {
      if (author.name) {
        return author.name;
      }
      return [author.family, author.given].filter(Boolean).join(" ");
    }).filter(Boolean);
  };

  const fetchCrossrefWork = async function (doi) {
    const response = await fetch("https://api.crossref.org/works/" + encodeURIComponent(doi), {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error("Crossref response: " + response.status);
    }
    const data = await response.json();
    return data && data.message ? data.message : null;
  };

  const fetchDataciteWork = async function (doi) {
    const response = await fetch("https://api.datacite.org/dois/" + encodeURIComponent(doi), {
      headers: { Accept: "application/vnd.api+json" },
    });
    if (!response.ok) {
      throw new Error("DataCite response: " + response.status);
    }
    const data = await response.json();
    const attributes = data && data.data ? data.data.attributes || {} : {};
    const title = attributes.titles && attributes.titles[0] ? attributes.titles[0].title : "";
    const container = attributes.container || {};
    const authors = (attributes.creators || []).map(function (creator) {
      if (creator.name) {
        return creator.name;
      }
      return [creator.familyName, creator.givenName].filter(Boolean).join(" ");
    }).filter(Boolean);
    return {
      title: title ? [title] : [],
      "container-title": container.title ? [container.title] : [],
      author: authors.map(function (name) {
        return { name: name };
      }),
      issued: attributes.publicationYear ? { "date-parts": [[attributes.publicationYear]] } : null,
    };
  };

  const fetchDoiWork = async function (doi) {
    try {
      return await fetchCrossrefWork(doi);
    } catch (crossrefError) {
      try {
        return await fetchDataciteWork(doi);
      } catch (dataciteError) {
        throw new Error((crossrefError && crossrefError.message ? crossrefError.message : "Crossref取得失敗") + " / " + (dataciteError && dataciteError.message ? dataciteError.message : "DataCite取得失敗"));
      }
    }
  };

  const setDoiMessage = function (rowIndex, message) {
    state.doiMessages[String(rowIndex)] = message;
  };

  const clearDoiMessage = function (rowIndex) {
    delete state.doiMessages[String(rowIndex)];
  };

  const isCompleteDoi = function (doi) {
    return /^10\.\d{4,9}\/\S+$/i.test(doi);
  };

  const hasExistingPaperMetadata = function (row) {
    return ["publishedYear", "coAuthor", "Title", "Journal"].some(function (code) {
      return String(row[code] || "").trim() !== "";
    });
  };

  const askOverwritePaperMetadata = function (row) {
    if (!hasExistingPaperMetadata(row)) {
      return true;
    }
    return window.confirm("すでに入力済みの論文情報があります。DOIから取得した情報で上書きしますか？");
  };

  const applyFetchedValue = function (row, code, value) {
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      row[code] = value;
    }
  };

  const applyDoiMetadata = async function (row, rowIndex, options) {
    options = options || {};
    const doi = normalizeDoi(row.DOIpaper);
    if (!doi) {
      setDoiMessage(rowIndex, "DOIを入力してから取得してください。");
      render();
      return;
    }
    if (!isCompleteDoi(doi)) {
      setDoiMessage(rowIndex, "DOIが途中までのようです。10.xxxx/xxxxx の形で入力してください。");
      row.DOIpaper = doi;
      render();
      return;
    }

    clearDoiMessage(rowIndex);
    setDoiMessage(rowIndex, "DOIから論文情報を取得しています...");
    state.notice = "";
    render();

    try {
      const message = await fetchDoiWork(doi);
      if (!message) {
        setDoiMessage(rowIndex, "DOIの登録情報が見つかりませんでした。DOIが正しいか確認してください。");
        return;
      }
      const title = Array.isArray(message.title) ? message.title[0] : "";
      const journal = Array.isArray(message["container-title"]) ? message["container-title"][0] : "";
      const year = getCrossrefYear(message);
      const authors = getCrossrefAuthors(message);

      if (!options.confirmed && !askOverwritePaperMetadata(row)) {
        setDoiMessage(rowIndex, "DOIからの反映をキャンセルしました。");
        row.DOIpaper = doi;
        render();
        return;
      }

      row.DOIpaper = doi;
      applyFetchedValue(row, "Title", title);
      applyFetchedValue(row, "Journal", journal);
      applyFetchedValue(row, "publishedYear", year);
      if (authors.length > 0) {
        applyFetchedValue(row, "文字列__1行__2", authors[0]);
        applyFetchedValue(row, "coAuthor", authors.join(", "));
      }

      const paperSection = SECTIONS.find(function (section) {
        return section.key === "paper";
      });
      state.counts.paper = paperSection ? countFilledRows(paperSection, state.sections.paper) : state.counts.paper;
      setDoiMessage(rowIndex, "DOIから論文情報を反映しました。著者区分は筆頭著者・共著者のどちらか確認してください。");
      state.notice = "";
    } catch (error) {
      setDoiMessage(rowIndex, "DOIの登録情報が見つかりませんでした。DOIが正しいか確認してください。");
      state.notice = "";
    }
  };

  const normalizeNameKey = function (value) {
    return String(value || "").replace(/[\s\u3000]+/g, "");
  };

  const compactJapaneseName = function (value) {
    const text = String(value || "").trim();
    return /[一-龠ぁ-んァ-ヶ]/.test(text) ? text.replace(/\s+/g, "") : text;
  };

  const countFilledRows = function (section, rows) {
    return rows.filter(function (row) {
      return hasSubstantiveValue(section, row);
    }).length;
  };

  const hasSubstantiveValue = function (section, row) {
    return section.fields.some(function (field) {
      if (field.code === section.roleCode || field.code === section.personCode) {
        return false;
      }
      return String(row[field.code] || "").trim() !== "";
    });
  };

  const getValue = function (row, code) {
    return String(row[code] || "").trim();
  };

  const getYearCode = function (section) {
    const yearField = section.fields.find(function (field) {
      return /年/.test(field.label) && field.kintoneType === "NUMBER";
    });
    return yearField ? yearField.code : "";
  };

  const getTitleCode = function (section) {
    const titleField = section.fields.find(function (field) {
      return /タイトル|受賞名|資格・認定名|資金名/.test(field.label);
    });
    return titleField ? titleField.code : "";
  };

  const getContributorListCode = function (section) {
    const field = section.fields.find(function (item) {
      return /＋/.test(item.label) && item.type === "textarea";
    });
    return field ? field.code : "";
  };

  const getFirstListedName = function (value) {
    return String(value || "")
      .split(/[、，,;\n\r]+/)
      .map(function (item) {
        return item.trim();
      })
      .filter(Boolean)[0] || "";
  };

  const normalizeComparableName = function (value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[.,，、・\s\u3000]/g, "");
  };

  const isSamePersonName = function (person, firstListedName) {
    const targets = [
      person,
      compactJapaneseName(person),
      toEnglishName(person),
    ].map(normalizeComparableName).filter(Boolean);
    const first = normalizeComparableName(firstListedName);
    return first && targets.some(function (target) {
      return target === first;
    });
  };

  const addValidationMessage = function (messages, seen, message) {
    if (!seen[message]) {
      messages.push(message);
      seen[message] = true;
    }
  };

  const shouldSkipOptionalBlankCheck = function (section, field, yearCode, titleCode, contributorListCode) {
    return field.code === section.roleCode
      || field.code === section.personCode
      || field.code === yearCode
      || field.code === titleCode
      || field.code === contributorListCode
      || field.code === "DOIpaper";
  };

  const validateState = function () {
    const messages = [];
    const seen = {};
    SECTIONS.forEach(function (section) {
      const rows = state.sections[section.key] || [];
      const yearCode = getYearCode(section);
      const titleCode = getTitleCode(section);
      const contributorListCode = getContributorListCode(section);
      rows.forEach(function (row, index) {
        if (!hasSubstantiveValue(section, row)) {
          return;
        }
        const rowLabel = section.label + " " + (index + 1);
        const year = getValue(row, yearCode);
        const title = getValue(row, titleCode);
        const person = section.personCode ? getValue(row, section.personCode) : "";
        const role = section.roleCode ? getValue(row, section.roleCode) : "";

        if (!year) {
          addValidationMessage(messages, seen, rowLabel + ": 年が未入力です。");
        } else if (!/^\d{4}$/.test(year)) {
          addValidationMessage(messages, seen, rowLabel + ": 年は2026のような4桁で入力してください。");
        }
        if (titleCode && !title) {
          addValidationMessage(messages, seen, rowLabel + ": タイトル・名称が未入力です。");
        }
        if (section.personCode && /^筆頭/.test(role) && !person) {
          addValidationMessage(messages, seen, rowLabel + ": 筆頭なのに著者名・発表者名が空です。");
        }
        if (contributorListCode && CONTRIBUTOR_CHECK_SECTION_KEYS.indexOf(section.key) !== -1) {
          const contributorList = getValue(row, contributorListCode);
          const firstListedName = getFirstListedName(contributorList);
          if (!contributorList) {
            addValidationMessage(messages, seen, rowLabel + ": " + (section.key === "paper" ? "筆頭著者＋共著者" : "発表者・共同者一覧") + "が未入力です。");
          } else if (person && firstListedName) {
            if (!isSamePersonName(person, firstListedName)) {
              addValidationMessage(messages, seen, rowLabel + ": 著者名・発表者名と、一覧の先頭の名前が一致しているか確認してください。");
            }
          }
        }
        if (section.key === "paper") {
          const doi = normalizeDoi(getValue(row, "DOIpaper"));
          if (doi && !isCompleteDoi(doi)) {
            addValidationMessage(messages, seen, rowLabel + ": DOIは 10.xxxx/... または https://doi.org/10.xxxx/... の形にしてください。");
          }
        }
        section.fields.forEach(function (field) {
          if (!shouldSkipOptionalBlankCheck(section, field, yearCode, titleCode, contributorListCode) && !getValue(row, field.code)) {
            addValidationMessage(messages, seen, rowLabel + ": " + field.label + " は任意ですが未入力です。");
          }
        });
      });
    });
    return messages;
  };

  const renderValidationMessages = function () {
    if (!state.validationMessages || state.validationMessages.length === 0) {
      return "";
    }
    return [
      '<div class="radtec-ui-validation">',
      '<strong>保存前チェック</strong>',
      '<ul>',
      state.validationMessages.map(function (message) {
        return '<li>' + escapeHtml(message) + '</li>';
      }).join(""),
      '</ul>',
      '</div>',
    ].join("");
  };

  const normalizeBeforeSave = function () {
    const paperSection = SECTIONS.find(function (section) {
      return section.key === "paper";
    });
    if (paperSection) {
      (state.sections.paper || []).forEach(function (row) {
        const doi = getValue(row, "DOIpaper");
        if (/^https:\/\/doi\.org\/10\./i.test(doi)) {
          row.DOIpaper = normalizeDoi(doi);
        }
      });
    }
    ["domestic", "international", "seminar"].forEach(function (sectionKey) {
      const section = SECTIONS.find(function (item) {
        return item.key === sectionKey;
      });
      if (!section) {
        return;
      }
      const contributorListCode = getContributorListCode(section);
      if (!contributorListCode || !section.personCode) {
        return;
      }
      (state.sections[section.key] || []).forEach(function (row) {
        if (!getValue(row, contributorListCode) && getValue(row, section.personCode)) {
          row[contributorListCode] = getValue(row, section.personCode);
        }
      });
    });
  };

  const getActiveSection = function () {
    return SECTIONS.find(function (section) {
      return section.key === state.active;
    }) || SECTIONS[0];
  };

  const render = function () {
    const root = document.getElementById(ROOT_ID);
    if (!root || !state) {
      return;
    }
    const activeSection = getActiveSection();
    const rows = state.sections[activeSection.key];

    root.innerHTML = [
      '<div class="radtec-ui-head">',
      '<div><strong>研究業績入力補助 試作版</strong><span> 標準フォームと同期して保存します / v' + UI_VERSION + '</span></div>',
      '</div>',
      '<div class="radtec-ui-person">',
      '<label>氏名 <small>name</small><input data-name-field value="' + escapeAttr(state.name) + '"></label>',
      '</div>',
      state.notice ? '<div class="radtec-ui-notice">' + escapeHtml(state.notice) + '</div>' : '',
      '<div class="radtec-ui-tabs">',
      SECTIONS.map(function (section) {
        return '<button type="button" class="' + (section.key === state.active ? "is-active" : "") + '" data-tab="' + section.key + '"><span>' + escapeHtml(section.label) + '</span> <small>' + state.counts[section.key] + '件</small></button>';
      }).join(""),
      '</div>',
      '<div class="radtec-ui-rows">',
      rows.map(function (row, rowIndex) {
        return renderRow(activeSection, row, rowIndex);
      }).join(""),
      '</div>',
      renderValidationMessages(),
      '<div class="radtec-ui-floating-toolbar">',
      '<button type="button" data-action="add-row">行を追加</button>',
      '<button type="button" data-action="validate">保存前チェック</button>',
      '</div>',
      '<div class="radtec-ui-note">この試作版は「追加・編集画面」で入力し、kintone標準の保存ボタンを押すと既存サブテーブルへ書き戻します。HP公開は現在の生成ルール側で制御し、この画面では公開チェックを保存しません。</div>',
    ].join("");
  };

  const renderRow = function (section, row, rowIndex) {
    return [
      '<div class="radtec-ui-row">',
      '<div class="radtec-ui-row-head">',
      '<strong>' + escapeHtml(section.label) + ' ' + (rowIndex + 1) + '</strong>',
      '<div class="radtec-ui-row-actions">',
      '<button type="button" data-action="remove-row" data-row="' + rowIndex + '">削除</button>',
      '</div>',
      '</div>',
      '<div class="radtec-ui-grid">',
      section.fields.map(function (field) {
        const value = row[field.code] || "";
        const base = 'data-row="' + rowIndex + '" data-field="' + escapeAttr(field.code) + '"';
        if (field.type === "select") {
          return '<label>' + escapeHtml(field.label) + '<small>' + escapeHtml(field.code) + '</small><select ' + base + '><option value=""' + (value === "" ? " selected" : "") + '></option>' + field.options.map(function (option) {
            return '<option value="' + escapeAttr(option) + '"' + (option === value ? " selected" : "") + '>' + escapeHtml(option) + '</option>';
          }).join("") + '</select></label>';
        }
        if (field.type === "number" && /年/.test(field.label)) {
          return '<label>' + escapeHtml(field.label) + '<small>' + escapeHtml(field.code) + '</small><input type="text" inputmode="numeric" value="' + escapeAttr(value) + '" ' + base + '></label>';
        }
        if (field.code === section.personCode) {
          const convertLabel = shouldShowJapaneseConvert(row, field.code) ? "日本語変換" : "英語変換";
          return '<label>' + escapeHtml(field.label) + '<small>' + escapeHtml(field.code) + '</small><div class="radtec-ui-inline-field"><input type="' + field.type + '" value="' + escapeAttr(value) + '" ' + base + '><button type="button" data-action="convert-author-name" data-row="' + rowIndex + '" data-field="' + escapeAttr(field.code) + '">' + convertLabel + '</button></div></label>';
        }
        if (section.key === "paper" && field.code === "DOIpaper") {
          const doiMessage = state.doiMessages[String(rowIndex)] || "";
          return '<label>' + escapeHtml(field.label) + '<small>' + escapeHtml(field.code) + '</small><div class="radtec-ui-inline-field"><input type="' + field.type + '" value="' + escapeAttr(value) + '" ' + base + '><button type="button" data-action="fetch-doi" data-row="' + rowIndex + '">DOIから情報を取得</button></div>' + (doiMessage ? '<div class="radtec-ui-field-error">' + escapeHtml(doiMessage) + '</div>' : '') + '</label>';
        }
        if (field.type === "textarea") {
          const helper = getTextareaHelper(section, field);
          return '<label class="is-wide">' + escapeHtml(field.label) + '<small>' + escapeHtml(field.code) + '</small><textarea ' + base + '>' + escapeHtml(value) + '</textarea>' + helper + '</label>';
        }
        return '<label>' + escapeHtml(field.label) + '<small>' + escapeHtml(field.code) + '</small><input type="' + field.type + '" value="' + escapeAttr(value) + '" ' + base + '></label>';
      }).join(""),
      '</div>',
      '</div>',
    ].join("");
  };

  const getTextareaHelper = function (section, field) {
    if (!/＋/.test(field.label)) {
      return "";
    }
    if (["domestic", "international", "seminar"].indexOf(section.key) !== -1) {
      return '<div class="radtec-ui-field-help">一人での発表なら入力不要です。空欄のまま保存すると、発表者名を自動で入れます。複数名の場合は日本語名は「、」、英語名は「, 」で区切ってください。</div>';
    }
    return '<div class="radtec-ui-field-help">日本語名は「、」、英語名は「, 」で区切ってください。先頭には筆頭著者・発表者を入力します。</div>';
  };

  const getViewerIssues = function (section, row) {
    const issues = [];
    const yearCode = getYearCode(section);
    const titleCode = getTitleCode(section);
    const contributorListCode = getContributorListCode(section);
    if (yearCode && !getValue(row, yearCode)) {
      issues.push("年未入力");
    }
    if (titleCode && !getValue(row, titleCode)) {
      issues.push("タイトル未入力");
    }
    if (contributorListCode && HP_PUBLIC_SECTION_KEYS.indexOf(section.key) !== -1 && !getValue(row, contributorListCode)) {
      issues.push(section.key === "paper" ? "著者一覧未入力" : "演者一覧未入力");
    }
    if (section.key === "paper") {
      const doi = normalizeDoi(getValue(row, "DOIpaper"));
      if (doi && !isCompleteDoi(doi)) {
        issues.push("DOI形式確認");
      }
    }
    return issues;
  };

  const getViewerMetaFields = function (section, row) {
    const yearCode = getYearCode(section);
    const titleCode = getTitleCode(section);
    return section.fields.filter(function (field) {
      return field.code !== yearCode
        && field.code !== titleCode
        && field.code !== section.roleCode
        && field.code !== section.personCode
        && field.code !== "DOIpaper"
        && getValue(row, field.code);
    });
  };

  const renderViewerRow = function (section, row) {
    const yearCode = getYearCode(section);
    const titleCode = getTitleCode(section);
    const year = getValue(row, yearCode) || "年未入力";
    const title = getValue(row, titleCode) || "タイトル未入力";
    const role = section.roleCode ? getValue(row, section.roleCode) : "";
    const person = section.personCode ? getValue(row, section.personCode) : "";
    const doi = section.key === "paper" ? normalizeDoi(getValue(row, "DOIpaper")) : "";
    const issues = getViewerIssues(section, row);
    const isHpPublic = HP_PUBLIC_SECTION_KEYS.indexOf(section.key) !== -1;
    const titleHtml = doi && isCompleteDoi(doi)
      ? '<a href="https://doi.org/' + escapeAttr(doi) + '" target="_blank" rel="noopener">' + escapeHtml(title) + '</a>'
      : escapeHtml(title);
    const metaFields = getViewerMetaFields(section, row);

    return [
      '<article class="radtec-view-card' + (issues.length ? " has-issues" : "") + '">',
      '<div class="radtec-view-card-main">',
      '<div class="radtec-view-year">' + escapeHtml(year) + '</div>',
      '<div class="radtec-view-body">',
      '<div class="radtec-view-title">' + titleHtml + '</div>',
      '<div class="radtec-view-person">',
      [role, person].filter(Boolean).map(escapeHtml).join(" / "),
      '</div>',
      metaFields.length ? '<dl class="radtec-view-meta">' + metaFields.map(function (field) {
        return '<div><dt>' + escapeHtml(field.label) + '</dt><dd>' + escapeHtml(getValue(row, field.code)) + '</dd></div>';
      }).join("") + '</dl>' : '',
      '</div>',
      '</div>',
      '<div class="radtec-view-badges">',
      isHpPublic ? '<span class="is-public">HP対象</span>' : '<span>面談用</span>',
      issues.map(function (issue) {
        return '<span class="is-issue">' + escapeHtml(issue) + '</span>';
      }).join(""),
      '</div>',
      '</article>',
    ].join("");
  };

  const renderViewerSection = function (section, rows) {
    const filledRows = (rows || []).filter(function (row) {
      return hasSubstantiveValue(section, row);
    }).slice().sort(function (a, b) {
      const yearA = Number(getValue(a, getYearCode(section))) || 0;
      const yearB = Number(getValue(b, getYearCode(section))) || 0;
      return yearB - yearA;
    });
    if (filledRows.length === 0) {
      return "";
    }
    return [
      '<section class="radtec-view-section">',
      '<h3>' + escapeHtml(section.label) + '<span>' + filledRows.length + '件</span></h3>',
      '<div class="radtec-view-list">',
      filledRows.map(function (row) {
        return renderViewerRow(section, row);
      }).join(""),
      '</div>',
      '</section>',
    ].join("");
  };

  const renderViewer = function (viewState) {
    const root = document.getElementById(VIEW_ROOT_ID);
    if (!root) {
      return;
    }
    const total = SECTIONS.reduce(function (sum, section) {
      return sum + countFilledRows(section, viewState.sections[section.key] || []);
    }, 0);
    const issueCount = SECTIONS.reduce(function (sum, section) {
      return sum + (viewState.sections[section.key] || []).filter(function (row) {
        return hasSubstantiveValue(section, row) && getViewerIssues(section, row).length > 0;
      }).length;
    }, 0);
    const sectionsHtml = SECTIONS.map(function (section) {
      return renderViewerSection(section, viewState.sections[section.key] || []);
    }).join("");
    root.innerHTML = [
      '<div class="radtec-view-head">',
      '<div><strong>研究業績 面談チェック</strong><span> v' + UI_VERSION + '</span></div>',
      '<div class="radtec-view-summary">',
      '<span>合計 ' + total + '件</span>',
      '<span class="' + (issueCount ? "has-issues" : "") + '">要確認 ' + issueCount + '件</span>',
      '</div>',
      '</div>',
      '<div class="radtec-view-person-name">' + escapeHtml(viewState.name || "氏名未入力") + '</div>',
      sectionsHtml || '<div class="radtec-view-empty">登録済みの業績はありません。</div>',
      '<div class="radtec-view-note">タイトル・年・著者一覧などに不足がある行は「要確認」として表示しています。HP反映時は、このような不完全データを除外する方針にできます。</div>',
    ].join("");
  };

  const mountViewer = async function (event) {
    const oldRoot = document.getElementById(VIEW_ROOT_ID);
    if (oldRoot) {
      oldRoot.remove();
    }

    await loadStaffNameMap();
    const viewState = buildState(event.record || {});
    const root = document.createElement("div");
    root.id = VIEW_ROOT_ID;

    const header = kintone.app.record.getHeaderMenuSpaceElement
      ? kintone.app.record.getHeaderMenuSpaceElement()
      : null;
    if (header) {
      header.appendChild(root);
    } else {
      document.body.insertBefore(root, document.body.firstChild);
    }

    injectStyle();
    renderViewer(viewState);
  };

  const getCurrentFiscalYear = function () {
    const today = new Date();
    return today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
  };

  const fetchAllRecords = async function () {
    const appId = kintone.app.getId();
    const fields = ["$id", "name"].concat(SECTIONS.map(function (section) {
      return section.tableCode;
    }));
    const records = [];
    let offset = 0;
    while (true) {
      const response = await kintone.api(kintone.api.url("/k/v1/records", true), "GET", {
        app: appId,
        fields: fields,
        query: "order by name asc limit 500 offset " + offset,
      });
      records.push.apply(records, response.records || []);
      if (!response.records || response.records.length < 500) {
        break;
      }
      offset += 500;
    }
    return records;
  };

  const flattenRecordAchievements = function (record) {
    const viewState = buildState(record);
    const items = [];
    SECTIONS.forEach(function (section) {
      (viewState.sections[section.key] || []).forEach(function (row) {
        if (!hasSubstantiveValue(section, row)) {
          return;
        }
        const year = Number(getValue(row, getYearCode(section))) || 0;
        const contributorListCode = getContributorListCode(section);
        items.push({
          section: section,
          row: row,
          year: year,
          title: getValue(row, getTitleCode(section)),
          role: section.roleCode ? getValue(row, section.roleCode) : "",
          person: section.personCode ? getValue(row, section.personCode) : "",
          contributors: contributorListCode ? getValue(row, contributorListCode) : "",
          issues: getViewerIssues(section, row),
          isHpPublic: HP_PUBLIC_SECTION_KEYS.indexOf(section.key) !== -1,
        });
      });
    });
    return {
      recordId: Number(readField(record, "$id")) || 0,
      name: viewState.name || "氏名未入力",
      items: items,
    };
  };

  const buildDashboardState = function (records) {
    const people = records.map(flattenRecordAchievements)
      .filter(function (person) {
        return person.name && person.name !== "氏名未入力";
      })
      .sort(function (a, b) {
        return a.recordId - b.recordId;
      });
    return {
      people: people,
      selectedName: people[0] ? people[0].name : "",
      years: "all",
      fiscalYear: getCurrentFiscalYear(),
      error: "",
    };
  };

  const getSelectedDashboardPerson = function () {
    if (!dashboardState || dashboardState.people.length === 0) {
      return null;
    }
    return dashboardState.people.find(function (person) {
      return person.name === dashboardState.selectedName;
    }) || dashboardState.people[0];
  };

  const summarizeDashboardPerson = function (person) {
    const fiscalYear = dashboardState.fiscalYear;
    const numericYears = Number(dashboardState.years);
    const years = dashboardState.years === "all" ? "all" : (numericYears || 5);
    const validYears = person.items.map(function (item) {
      return item.year;
    }).filter(function (year) {
      return year > 0;
    });
    const startYear = years === "all"
      ? (validYears.length ? Math.min.apply(null, validYears) : fiscalYear)
      : fiscalYear - years + 1;
    const recentItems = person.items.filter(function (item) {
      return item.year >= startYear && item.year <= fiscalYear;
    });
    const fiscalItems = person.items.filter(function (item) {
      return item.year === fiscalYear;
    });
    const issueItems = person.items.filter(function (item) {
      return item.issues.length > 0;
    });
    const hpIssueItems = issueItems.filter(function (item) {
      return item.isHpPublic;
    });
    return {
      startYear: startYear,
      years: years,
      recentItems: recentItems,
      fiscalItems: fiscalItems,
      issueItems: issueItems,
      hpIssueItems: hpIssueItems,
    };
  };

  const renderDashboardBar = function (label, count, maxCount, className) {
    const width = count > 0 && maxCount > 0 ? Math.max(8, Math.round((count / maxCount) * 100)) : 0;
    return [
      '<div class="radtec-dash-bar-row">',
      '<div class="radtec-dash-bar-label">' + escapeHtml(label) + '</div>',
      '<div class="radtec-dash-bar-track"><div class="radtec-dash-bar ' + (className || "") + '" style="width:' + width + '%"></div></div>',
      '<div class="radtec-dash-bar-value">' + count + '</div>',
      '</div>',
    ].join("");
  };

  const renderDashboardYearChart = function (person, summary) {
    const years = [];
    for (let year = summary.startYear; year <= dashboardState.fiscalYear; year += 1) {
      years.push(year);
    }
    const counts = years.map(function (year) {
      return person.items.filter(function (item) {
        return item.year === year;
      }).length;
    });
    const maxCount = Math.max.apply(null, counts.concat([1]));
    return [
      '<div class="radtec-dash-chart">',
      years.map(function (year, index) {
        return renderDashboardBar(String(year), counts[index], maxCount, "is-year");
      }).join(""),
      '</div>',
    ].join("");
  };

  const renderDashboardSectionChart = function (person) {
    const counts = SECTIONS.map(function (section) {
      return {
        label: section.label,
        count: person.items.filter(function (item) {
          return item.section.key === section.key;
        }).length,
      };
    }).filter(function (item) {
      return item.count > 0;
    });
    const maxCount = Math.max.apply(null, counts.map(function (item) {
      return item.count;
    }).concat([1]));
    return [
      '<div class="radtec-dash-chart">',
      counts.length ? counts.map(function (item) {
        return renderDashboardBar(item.label, item.count, maxCount, "is-section");
      }).join("") : '<div class="radtec-dash-empty">登録済みの業績はありません。</div>',
      '</div>',
    ].join("");
  };

  const renderDashboardRecentList = function (items) {
    if (items.length === 0) {
      return '<div class="radtec-dash-empty">該当する業績はありません。</div>';
    }
    return [
      '<ul class="radtec-dash-list">',
      items.slice().sort(function (a, b) {
        return b.year - a.year;
      }).slice(0, 8).map(function (item) {
        return [
          '<li>',
          '<div class="radtec-dash-item-head">',
          '<span>' + escapeHtml(item.year || "年未入力") + '</span>',
          '<strong>' + escapeHtml(item.section.label) + '</strong>',
          item.role ? '<em>' + escapeHtml(item.role) + '</em>' : '',
          '</div>',
          '<div class="radtec-dash-item-title">' + escapeHtml(item.title || "タイトル未入力") + '</div>',
          '<dl class="radtec-dash-item-meta">',
          item.person ? '<div><dt>本人</dt><dd>' + escapeHtml(item.person) + '</dd></div>' : '',
          item.contributors ? '<div><dt>著者・演者</dt><dd>' + escapeHtml(item.contributors) + '</dd></div>' : '',
          item.issues.length ? '<div><dt>要確認</dt><dd>' + item.issues.map(function (issue) {
            return '<b>' + escapeHtml(issue) + '</b>';
          }).join("") + '</dd></div>' : '',
          '</dl>',
          '</li>',
        ].join("");
      }).join(""),
      '</ul>',
    ].join("");
  };

  const getDashboardEvaluation = function (summary) {
    if (summary.fiscalItems.length >= 3) {
      return { label: "今年度の活動量が多い", className: "is-high" };
    }
    if (summary.fiscalItems.length >= 1) {
      return { label: "今年度の活動あり", className: "is-good" };
    }
    if (summary.recentItems.length >= 3) {
      return { label: "直近期間で継続あり", className: "is-mid" };
    }
    return { label: "面談で確認", className: "is-low" };
  };

  const renderDashboard = function () {
    const root = document.getElementById(DASHBOARD_ROOT_ID);
    if (!root || !dashboardState) {
      return;
    }
    if (dashboardState.error) {
      root.innerHTML = '<div class="radtec-dash-error">' + escapeHtml(dashboardState.error) + '</div>';
      return;
    }
    const person = getSelectedDashboardPerson();
    if (!person) {
      root.innerHTML = '<div class="radtec-dash-empty">表示できる職員データがありません。</div>';
      return;
    }
    const summary = summarizeDashboardPerson(person);
    const evaluation = getDashboardEvaluation(summary);
    root.innerHTML = [
      '<div class="radtec-dash-head">',
      '<div><strong>研究業績 面談ダッシュボード</strong><span> v' + UI_VERSION + '</span></div>',
      '<div class="radtec-dash-controls">',
      '<label>職員<select data-dashboard-name>',
      dashboardState.people.map(function (item) {
        return '<option value="' + escapeAttr(item.name) + '"' + (item.name === person.name ? " selected" : "") + '>' + escapeHtml(item.name) + '</option>';
      }).join(""),
      '</select></label>',
      '<label>直近<select data-dashboard-years>',
      [{ value: "all", label: "全て" }, { value: "3", label: "3年" }, { value: "5", label: "5年" }, { value: "7", label: "7年" }, { value: "10", label: "10年" }].map(function (option) {
        return '<option value="' + option.value + '"' + (String(option.value) === String(dashboardState.years) ? " selected" : "") + '>' + option.label + '</option>';
      }).join(""),
      '</select></label>',
      '</div>',
      '</div>',
      '<div class="radtec-dash-kpis">',
      '<div><span>今年度</span><strong>' + summary.fiscalItems.length + '</strong><small>' + dashboardState.fiscalYear + '年度</small></div>',
      '<div><span>' + (summary.years === "all" ? "全期間" : "直近" + summary.years + "年") + '</span><strong>' + summary.recentItems.length + '</strong><small>' + summary.startYear + '-' + dashboardState.fiscalYear + '</small></div>',
      '<div><span>総数</span><strong>' + person.items.length + '</strong><small>全期間</small></div>',
      '<div class="' + evaluation.className + '"><span>評価目安</span><strong>' + escapeHtml(evaluation.label) + '</strong><small>面談補助</small></div>',
      '<div class="' + (summary.hpIssueItems.length ? "is-low" : "is-good") + '"><span>HP要確認</span><strong>' + summary.hpIssueItems.length + '</strong><small>未入力等</small></div>',
      '</div>',
      '<div class="radtec-dash-grid">',
      '<section><h3>年別推移</h3>' + renderDashboardYearChart(person, summary) + '</section>',
      '<section><h3>カテゴリ別</h3>' + renderDashboardSectionChart(person) + '</section>',
      '<section><h3>今年度の業績</h3>' + renderDashboardRecentList(summary.fiscalItems) + '</section>',
      '<section><h3>要確認</h3>' + renderDashboardRecentList(summary.issueItems) + '</section>',
      '</div>',
    ].join("");
  };

  const removeDashboard = function () {
    const oldRoot = document.getElementById(DASHBOARD_ROOT_ID);
    if (oldRoot) {
      oldRoot.remove();
    }
    dashboardState = null;
  };

  const shouldShowDashboard = function (event) {
    return DASHBOARD_VIEW_NAME_PATTERN.test(String(event.viewName || ""));
  };

  const mountDashboard = async function () {
    removeDashboard();
    const root = document.createElement("div");
    root.id = DASHBOARD_ROOT_ID;
    root.innerHTML = '<div class="radtec-dash-loading">研究業績を集計しています...</div>';
    const header = kintone.app.getHeaderSpaceElement
      ? kintone.app.getHeaderSpaceElement()
      : null;
    if (header) {
      header.appendChild(root);
    } else {
      document.body.insertBefore(root, document.body.firstChild);
    }
    injectStyle();
    try {
      await loadStaffNameMap();
      dashboardState = buildDashboardState(await fetchAllRecords());
    } catch (error) {
      dashboardState = {
        people: [],
        selectedName: "",
        years: 5,
        fiscalYear: getCurrentFiscalYear(),
        error: "研究業績の集計データを取得できませんでした。画面を再読み込みしても続く場合は、権限またはAPI制限を確認してください。",
      };
    }
    renderDashboard();
  };

  const mount = async function (event) {
    const oldRoot = document.getElementById(ROOT_ID);
    if (oldRoot) {
      oldRoot.remove();
    }

    await loadStaffNameMap();
    state = buildState(event.record || {});

    const root = document.createElement("div");
    root.id = ROOT_ID;
    root.innerHTML = "";

    const header = kintone.app.record.getHeaderMenuSpaceElement
      ? kintone.app.record.getHeaderMenuSpaceElement()
      : null;
    if (header) {
      header.appendChild(root);
    } else {
      document.body.insertBefore(root, document.body.firstChild);
    }

    injectStyle();
    render();
  };

  const writeBack = function (event) {
    if (!state) {
      return event;
    }
    normalizeBeforeSave();
    if (event.record.name) {
      event.record.name.value = state.name;
    }
    SECTIONS.forEach(function (section) {
      if (!event.record[section.tableCode]) {
        return;
      }
      event.record[section.tableCode].value = state.sections[section.key]
        .filter(function (row) {
          return hasSubstantiveValue(section, row);
        })
        .map(function (row) {
          const value = {};
          section.fields.forEach(function (field) {
          value[field.code] = {
              type: field.kintoneType,
              value: row[field.code] || "",
            };
          });
          return { value: value };
        });
    });
    return event;
  };

  const wireEvents = function () {
    const handleFieldChange = function (target) {
      const root = document.getElementById(ROOT_ID);
      if (!root || !root.contains(target) || !state) {
        return;
      }
      if (target.matches("[data-name-field]")) {
        state.name = target.value;
        return;
      }
      const rowIndex = Number(target.dataset.row);
      const fieldCode = target.dataset.field;
      if (!Number.isNaN(rowIndex) && fieldCode) {
        const activeSection = getActiveSection();
        const row = state.sections[activeSection.key][rowIndex];
        row[fieldCode] = target.value;
        if (activeSection.key === "paper" && fieldCode === "DOIpaper") {
          clearDoiMessage(rowIndex);
          const fieldError = target.closest("label") ? target.closest("label").querySelector(".radtec-ui-field-error") : null;
          if (fieldError) {
            fieldError.remove();
          }
        }
        if (fieldCode === activeSection.roleCode) {
          syncPersonNameByRole(activeSection, row);
          render();
          return;
        }
        state.counts[activeSection.key] = countFilledRows(activeSection, state.sections[activeSection.key]);
      }
    };

    document.addEventListener("input", function (event) {
      const target = event.target;
      handleFieldChange(target);
    });

    document.addEventListener("change", function (event) {
      const target = event.target;
      const dashboardRoot = document.getElementById(DASHBOARD_ROOT_ID);
      if (dashboardRoot && dashboardRoot.contains(target) && dashboardState) {
        if (target.matches("[data-dashboard-name]")) {
          dashboardState.selectedName = target.value;
          renderDashboard();
          return;
        }
        if (target.matches("[data-dashboard-years]")) {
          dashboardState.years = target.value === "all" ? "all" : (Number(target.value) || 5);
          renderDashboard();
          return;
        }
      }
      handleFieldChange(target);
    });

    document.addEventListener("click", async function (event) {
      const target = event.target.closest("button");
      const root = document.getElementById(ROOT_ID);
      if (!target || !root || !root.contains(target) || !state) {
        return;
      }
      if (target.dataset.tab) {
        state.active = target.dataset.tab;
        render();
        return;
      }
      if (target.dataset.action === "add-row") {
        const activeSection = getActiveSection();
        state.sections[activeSection.key].push(defaultRowForAdd(activeSection));
        state.counts[activeSection.key] = countFilledRows(activeSection, state.sections[activeSection.key]);
        render();
        scrollToLastRow();
        return;
      }
      if (target.dataset.action === "remove-row") {
        const activeSection = getActiveSection();
        const rowIndex = Number(target.dataset.row);
        if (!Number.isNaN(rowIndex)) {
          state.sections[activeSection.key].splice(rowIndex, 1);
        }
        state.counts[activeSection.key] = countFilledRows(activeSection, state.sections[activeSection.key]);
        render();
        return;
      }
      if (target.dataset.action === "fetch-doi") {
        const activeSection = getActiveSection();
        const rowIndex = target.dataset.row !== undefined
          ? Number(target.dataset.row)
          : (state.sections.paper || []).length - 1;
        if (activeSection.key === "paper" && !Number.isNaN(rowIndex)) {
          const row = state.sections.paper[rowIndex];
          const inlineInput = target.closest(".radtec-ui-inline-field")
            ? target.closest(".radtec-ui-inline-field").querySelector("input[data-field='DOIpaper']")
            : null;
          if (inlineInput) {
            row.DOIpaper = inlineInput.value;
          }
          await applyDoiMetadata(row, rowIndex);
          state.validationMessages = [];
          render();
        } else {
          setDoiMessage(rowIndex, "論文タブのDOI取得ボタンとして認識できませんでした。");
          state.notice = "";
          render();
        }
        return;
      }
      if (target.dataset.action === "convert-author-name") {
        const activeSection = getActiveSection();
        const rowIndex = Number(target.dataset.row);
        const fieldCode = target.dataset.field;
        if (!Number.isNaN(rowIndex) && fieldCode) {
          const row = state.sections[activeSection.key][rowIndex];
          const currentValue = String(row[fieldCode] || "").trim();
          if (shouldShowJapaneseConvert(row, fieldCode)) {
            row[fieldCode] = getJapaneseNameForRow(row, fieldCode);
            state.notice = "日本語氏名へ戻しました。";
            render();
            return;
          }
          const sourceName = currentValue || state.initialName;
          const convertedName = toEnglishName(sourceName);
          if (!sourceName || convertedName === sourceName) {
            state.notice = "英語氏名の対応が見つかりませんでした。職員名簿の英語氏名フィールド連携が必要です。";
          } else {
            row.__japaneseNameByField = row.__japaneseNameByField || {};
            row.__japaneseNameByField[fieldCode] = sourceName;
            row[fieldCode] = convertedName;
            state.notice = "英語氏名へ変換しました。";
          }
          render();
        }
        return;
      }
      if (target.dataset.action === "validate") {
        normalizeBeforeSave();
        state.validationMessages = validateState();
        state.notice = state.validationMessages.length > 0
          ? "保存前チェックで確認が必要な項目があります。"
          : "保存前チェックは問題ありません。";
        render();
        return;
      }
    });
  };

  const formatNames = function () {
    SECTIONS.forEach(function (section) {
      state.sections[section.key].forEach(function (row) {
        ["coAuthor", "coPresenter", "coPresenter_0", "coPresenter_1", "coPresenter_2", "coPresenter_3", "coPresenter_4"].forEach(function (code) {
          if (row[code]) {
            row[code] = normalizeNames(row[code]);
          }
        });
      });
    });
  };

  const scrollToLastRow = function () {
    window.requestAnimationFrame(function () {
      const root = document.getElementById(ROOT_ID);
      if (!root) {
        return;
      }
      const rows = root.querySelectorAll(".radtec-ui-row");
      const lastRow = rows[rows.length - 1];
      if (lastRow && lastRow.scrollIntoView) {
        lastRow.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  const normalizeNames = function (value) {
    const text = String(value || "").trim();
    if (!text) {
      return "";
    }
    if (/[A-Za-z]/.test(text)) {
      return text.replace(/\s*,\s*/g, ", ").replace(/\s{2,}/g, " ");
    }
    const known = [
      "石田悦子",
      "安井謙一郎",
      "大塚昭義",
      "竹上和希",
      "久冨庄平",
      "寺中悠",
      "田邊雅博",
      "伊原健一郎",
    ];
    let rest = text.replace(/[,\u3001\s]+/g, "");
    const names = [];
    known.forEach(function (name) {
      if (rest.indexOf(name) !== -1) {
        names.push(name);
        rest = rest.replace(name, "");
      }
    });
    return names.length > 0 && rest === "" ? names.join("、") : text.replace(/[,\s]+/g, "、");
  };

  const injectStyle = function () {
    // Styles are loaded from app116-study-results-ui.css in kintone customization settings.
  };

  const escapeHtml = function (value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const escapeAttr = escapeHtml;

  wireEvents();

  kintone.events.on(EVENTS_INDEX, async function (event) {
    if (!shouldShowDashboard(event)) {
      removeDashboard();
      return event;
    }
    await mountDashboard();
    return event;
  });

  kintone.events.on(EVENTS_SHOW, async function (event) {
    await mount(event);
    return event;
  });

  kintone.events.on(EVENTS_DETAIL, async function (event) {
    await mountViewer(event);
    return event;
  });

  kintone.events.on(EVENTS_SUBMIT, function (event) {
    return writeBack(event);
  });
})();

