(function () {
  "use strict";

  const ROOT_ID = "radtec-study-results-ui-prototype";

  const EVENTS_SHOW = [
    "app.record.create.show",
    "app.record.edit.show",
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
        { code: "publishedYear", label: "発表年", type: "number", kintoneType: "NUMBER" },
        { code: "ドロップダウン", label: "著者区分", type: "select", kintoneType: "DROP_DOWN", options: ["筆頭著者", "責任著者", "共著者"] },
        { code: "文字列__1行__2", label: "著者", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "coAuthor", label: "筆頭著者＋共著者", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "Title", label: "論文タイトル", type: "textarea", kintoneType: "MULTI_LINE_TEXT" },
        { code: "Journal", label: "ジャーナル名", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "ドロップダウン_7", label: "査読", type: "select", kintoneType: "DROP_DOWN", options: ["有り", "無し"] },
        { code: "採択区分", label: "採択区分", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
        { code: "DOIpaper", label: "DOI", type: "text", kintoneType: "SINGLE_LINE_TEXT" },
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

  let state = null;
  let staffNameMap = null;

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
      validationMessages: [],
      active: "paper",
      counts: {},
      sections: {},
    };
    SECTIONS.forEach(function (section) {
      const rows = readRows(record, section);
      rows.forEach(function (row) {
        applyFieldDefaults(section, row);
        const role = section.roleCode ? String(row[section.roleCode] || "") : "";
        const person = section.personCode ? String(row[section.personCode] || "").trim() : "";
        if (!hasSubstantiveValue(section, row) || (/^筆頭/.test(role) && !person)) {
          syncPersonNameByRole(section, row, next.name, true);
        }
      });
      next.counts[section.key] = countFilledRows(section, rows);
      next.sections[section.key] = rows;
      if (next.sections[section.key].length === 0) {
        const row = defaultBlankRow(section);
        syncPersonNameByRole(section, row, next.name, true);
        next.sections[section.key].push(row);
      }
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

  const defaultBlankRow = function (section) {
    const row = blankRow(section);
    applyFieldDefaults(section, row);
    return row;
  };

  const defaultRowForAdd = function (section) {
    const row = defaultBlankRow(section);
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
      row[section.personCode] = "";
      if (!silent && state) {
        state.notice = "共著・共同演者を選択したため、氏名欄をクリアしました。";
      }
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

  const normalizeDoi = function (value) {
    return String(value || "")
      .trim()
      .replace(/^https?:\/\/(dx\.)?doi\.org\//i, "")
      .replace(/^doi:\s*/i, "");
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

  const applyDoiMetadata = async function (row) {
    const doi = normalizeDoi(row.DOIpaper);
    if (!doi) {
      state.notice = "DOIを入力してから取得してください。";
      return;
    }

    state.notice = "DOIから論文情報を取得しています...";
    render();

    try {
      const message = await fetchCrossrefWork(doi);
      if (!message) {
        state.notice = "DOIから論文情報を取得できませんでした。";
        return;
      }
      const title = Array.isArray(message.title) ? message.title[0] : "";
      const journal = Array.isArray(message["container-title"]) ? message["container-title"][0] : "";
      const year = getCrossrefYear(message);
      const authors = getCrossrefAuthors(message);

      row.DOIpaper = doi;
      if (title) {
        row.Title = title;
      }
      if (journal) {
        row.Journal = journal;
      }
      if (year) {
        row.publishedYear = year;
      }
      if (authors.length > 0) {
        row["文字列__1行__2"] = authors[0];
        row.coAuthor = authors.join(", ");
      }

      const paperSection = SECTIONS.find(function (section) {
        return section.key === "paper";
      });
      state.counts.paper = paperSection ? countFilledRows(paperSection, state.sections.paper) : state.counts.paper;
      state.notice = "DOIから論文情報を反映しました。";
    } catch (error) {
      state.notice = "DOIから論文情報を取得できませんでした。DOIの入力内容かCrossref登録状況を確認してください。";
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

  const validateState = function () {
    const messages = [];
    SECTIONS.forEach(function (section) {
      const rows = state.sections[section.key] || [];
      const yearCode = getYearCode(section);
      const titleCode = getTitleCode(section);
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
          messages.push(rowLabel + ": 年が未入力です。");
        } else if (!/^\d{4}$/.test(year)) {
          messages.push(rowLabel + ": 年は2026のような4桁で入力してください。");
        }
        if (titleCode && !title) {
          messages.push(rowLabel + ": タイトル・名称が未入力です。");
        }
        if (section.personCode && /^筆頭/.test(role) && !person) {
          messages.push(rowLabel + ": 筆頭なのに著者名・発表者名が空です。");
        }
        if (section.personCode && /^(共著者|共同著者|共同演者)$/.test(role) && person) {
          messages.push(rowLabel + ": 共著・共同演者ですが、著者名・発表者名が残っています。不要なら空にしてください。");
        }
        if (section.key === "paper") {
          const doi = getValue(row, "DOIpaper");
          if (doi && !/^(10\.\S+|https:\/\/doi\.org\/10\.\S+)$/i.test(doi)) {
            messages.push(rowLabel + ": DOIは 10.xxxx/... または https://doi.org/10.xxxx/... の形にしてください。");
          }
        }
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
    if (!paperSection) {
      return;
    }
    (state.sections.paper || []).forEach(function (row) {
      const doi = getValue(row, "DOIpaper");
      if (/^https:\/\/doi\.org\/10\./i.test(doi)) {
        row.DOIpaper = normalizeDoi(doi);
      }
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
      '<div><strong>研究業績入力補助 試作版</strong><span> 標準フォームと同期して保存します</span></div>',
      '</div>',
      '<div class="radtec-ui-person">',
      '<label>氏名 <small>name</small><input data-name-field value="' + escapeAttr(state.name) + '"></label>',
      '</div>',
      state.notice ? '<div class="radtec-ui-notice">' + escapeHtml(state.notice) + '</div>' : '',
      renderValidationMessages(),
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
      '<div class="radtec-ui-floating-toolbar">',
      '<button type="button" data-action="add-row">行を追加</button>',
      '<button type="button" data-action="format-names">名前整形</button>',
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
      section.key === "paper" ? '<button type="button" data-action="fetch-doi" data-row="' + rowIndex + '">DOI取得</button>' : "",
      '<button type="button" data-action="remove-row" data-row="' + rowIndex + '">削除</button>',
      '</div>',
      '</div>',
      '<div class="radtec-ui-grid">',
      section.fields.map(function (field) {
        const value = row[field.code] || "";
        const base = 'data-row="' + rowIndex + '" data-field="' + escapeAttr(field.code) + '"';
        if (field.type === "select") {
          return '<label>' + escapeHtml(field.label) + '<small>' + escapeHtml(field.code) + '</small><select ' + base + '>' + field.options.map(function (option) {
            return '<option value="' + escapeAttr(option) + '"' + (option === value ? " selected" : "") + '>' + escapeHtml(option) + '</option>';
          }).join("") + '</select></label>';
        }
        if (field.code === section.personCode) {
          return '<label>' + escapeHtml(field.label) + '<small>' + escapeHtml(field.code) + '</small><div class="radtec-ui-inline-field"><input type="' + field.type + '" value="' + escapeAttr(value) + '" ' + base + '><button type="button" data-action="convert-author-name" data-row="' + rowIndex + '" data-field="' + escapeAttr(field.code) + '">英語変換</button></div></label>';
        }
        if (field.type === "textarea") {
          return '<label class="is-wide">' + escapeHtml(field.label) + '<small>' + escapeHtml(field.code) + '</small><textarea ' + base + '>' + escapeHtml(value) + '</textarea></label>';
        }
        return '<label>' + escapeHtml(field.label) + '<small>' + escapeHtml(field.code) + '</small><input type="' + field.type + '" value="' + escapeAttr(value) + '" ' + base + '></label>';
      }).join(""),
      '</div>',
      '</div>',
    ].join("");
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
    const validationMessages = validateState();
    if (validationMessages.length > 0) {
      state.validationMessages = validationMessages;
      state.notice = "保存前チェックで確認が必要な項目があります。";
      event.error = validationMessages.join("\n");
      render();
      return event;
    }
    state.validationMessages = [];
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
        if (state.sections[activeSection.key].length > 1) {
          state.sections[activeSection.key].splice(rowIndex, 1);
        } else {
          state.sections[activeSection.key][0] = defaultBlankRow(activeSection);
        }
        state.counts[activeSection.key] = countFilledRows(activeSection, state.sections[activeSection.key]);
        render();
        return;
      }
      if (target.dataset.action === "fetch-doi") {
        const activeSection = getActiveSection();
        const rowIndex = Number(target.dataset.row);
        if (activeSection.key === "paper" && !Number.isNaN(rowIndex)) {
          const row = state.sections.paper[rowIndex];
          await applyDoiMetadata(row);
          state.validationMessages = [];
          render();
        }
        return;
      }
      if (target.dataset.action === "convert-author-name") {
        const activeSection = getActiveSection();
        const rowIndex = Number(target.dataset.row);
        const fieldCode = target.dataset.field;
        if (!Number.isNaN(rowIndex) && fieldCode) {
          const currentValue = state.sections[activeSection.key][rowIndex][fieldCode] || state.initialName;
          const convertedName = toEnglishName(currentValue);
          if (convertedName === currentValue) {
            state.notice = "英語氏名の対応が見つかりませんでした。職員名簿の英語氏名フィールド連携が必要です。";
          } else {
            state.sections[activeSection.key][rowIndex][fieldCode] = convertedName;
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
      if (target.dataset.action === "format-names") {
        formatNames();
        state.validationMessages = [];
        render();
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
    if (document.getElementById(ROOT_ID + "-style")) {
      return;
    }
    const style = document.createElement("style");
    style.id = ROOT_ID + "-style";
    style.textContent = [
      "#" + ROOT_ID + "{margin:12px 0;padding:14px;border:1px solid #b7d6ea;border-radius:8px;background:#f7fbfe;color:#24384a;font-size:14px;line-height:1.5;}",
      "#" + ROOT_ID + " button{border:1px solid #bdd0df;border-radius:6px;background:#fff;padding:6px 10px;cursor:pointer;font-weight:700;}",
      "#" + ROOT_ID + " input,#" + ROOT_ID + " textarea,#" + ROOT_ID + " select{width:100%;box-sizing:border-box;border:1px solid #cbd9e4;border-radius:6px;padding:7px 8px;background:#fff;}",
      "#" + ROOT_ID + " textarea{min-height:68px;resize:vertical;}",
      ".radtec-ui-head,.radtec-ui-row-head{display:flex;align-items:center;justify-content:space-between;gap:10px;}",
      ".radtec-ui-floating-toolbar{position:sticky;bottom:12px;z-index:20;display:flex;gap:8px;justify-content:flex-end;margin-top:14px;padding:10px;border:1px solid #bdd0df;border-radius:8px;background:rgba(247,251,254,.96);box-shadow:0 8px 24px rgba(31,56,80,.14);}",
      ".radtec-ui-floating-toolbar button{background:#fff;}",
      ".radtec-ui-floating-toolbar button:last-child{background:#256fa8 !important;border-color:#256fa8 !important;color:#fff !important;}",
      ".radtec-ui-head{margin-bottom:10px;}",
      ".radtec-ui-head span,.radtec-ui-note, #" + ROOT_ID + " small{color:#607284;font-size:12px;font-weight:500;}",
      ".radtec-ui-person{margin:10px 0;max-width:360px;}",
      ".radtec-ui-notice{margin:8px 0;padding:8px 10px;border:1px solid #d7c58b;border-radius:6px;background:#fff9df;color:#66520b;font-weight:700;}",
      ".radtec-ui-validation{margin:8px 0;padding:10px 12px;border:1px solid #e0a3a3;border-radius:6px;background:#fff0f0;color:#7a2d2d;}",
      ".radtec-ui-validation ul{margin:6px 0 0 18px;padding:0;}",
      ".radtec-ui-validation li{margin:3px 0;}",
      ".radtec-ui-tabs{display:flex;gap:6px;flex-wrap:wrap;margin:10px 0;}",
      ".radtec-ui-tabs button{color:#24384a !important;background:#fff !important;}",
      ".radtec-ui-tabs button span{color:#24384a !important;}",
      ".radtec-ui-tabs button.is-active{background:#256fa8 !important;border-color:#256fa8 !important;color:#fff !important;}",
      ".radtec-ui-tabs button.is-active span{color:#fff !important;}",
      ".radtec-ui-tabs button.is-active small{color:#e8f4ff !important;}",
      ".radtec-ui-row{border:1px solid #d8e5ee;border-radius:8px;background:#fff;margin-top:10px;padding:12px;}",
      ".radtec-ui-row-actions{display:flex;gap:6px;align-items:center;}",
      ".radtec-ui-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:10px;}",
      ".radtec-ui-grid label{display:grid;gap:4px;font-weight:700;}",
      ".radtec-ui-grid label.is-wide{grid-column:1/-1;}",
      ".radtec-ui-inline-field{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:6px;}",
      ".radtec-ui-note{margin-top:10px;}",
      "@media(max-width:760px){.radtec-ui-grid{grid-template-columns:1fr;}.radtec-ui-head,.radtec-ui-row-head{align-items:flex-start;flex-direction:column;}.radtec-ui-inline-field{grid-template-columns:1fr;}.radtec-ui-floating-toolbar{left:8px;right:8px;bottom:8px;flex-wrap:wrap;justify-content:stretch;}.radtec-ui-floating-toolbar button{flex:1 1 auto;}}",
    ].join("");
    document.head.appendChild(style);
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

  kintone.events.on(EVENTS_SHOW, async function (event) {
    await mount(event);
    return event;
  });

  kintone.events.on(EVENTS_SUBMIT, function (event) {
    return writeBack(event);
  });
})();
