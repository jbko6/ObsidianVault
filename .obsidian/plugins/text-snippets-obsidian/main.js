/*
THIS IS A GENERATED/BUNDLED FILE BY ROLLUP
if you want to view the source visit the plugins github repository
*/

'use strict';

var obsidian = require('obsidian');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

class TextSnippets extends obsidian.Plugin {
    onInit() { }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Loading snippets plugin");
            yield this.loadSettings();
            this.addSettingTab(new TextSnippetsSettingsTab(this.app, this));
            //expected warning
            var isLegacy = this.app.vault.config.legacyEditor;
            if (!isLegacy != this.settings.isWYSIWYG) {
                this.settings.isWYSIWYG = !isLegacy;
                yield this.saveSettings();
            }
            this.addCommand({
                id: "text-snippets",
                name: "Run snippet replacement",
                callback: () => this.SnippetOnTrigger(),
                hotkeys: [{
                        modifiers: ["Mod"],
                        key: "tab"
                    }],
            });
            this.cmEditors = [];
            this.registerCodeMirror((cm) => {
                this.cmEditors.push(cm);
                // the callback has to be called through another function in order for 'this' to work
                cm.on('keydown', (cm, event) => this.handleKeyDown(cm, event));
            });
        });
    }
    onunload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Unloading text snippet plugin");
            this.cmEditors = [];
            this.registerCodeMirror((cm) => {
                this.cmEditors.push(cm);
                // the callback has to be called through another function in order for 'this' to work
                cm.off('keydown', (cm, event) => this.handleKeyDown(cm, event));
            });
        });
    }
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
    UpdateSplit(newlineSymbol) {
        var nlSymb = newlineSymbol;
        var nlSymb = nlSymb.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        var rg = '(?<!' + nlSymb + ')\\n';
        const regex = new RegExp(rg);
        var splited = this.settings.snippets_file.split(regex);
        splited = splited.filter(item => item);
        this.settings.snippets = splited;
    }
    getSelectedText(editor) {
        if (editor.somethingSelected()) {
            return editor.getSelection();
        }
        else {
            var wordBoundaries = this.getWordBoundaries(editor);
            editor.getDoc().setSelection(wordBoundaries.start, wordBoundaries.end);
            return editor.getSelection();
        }
    }
    isWord(c) {
        //if character is not a whiespace or a delimiter
        var notWord = ' \t\n\r\v' + this.settings.wordDelimiters;
        if (notWord.indexOf(c) <= -1) {
            return true;
        }
        return false;
    }
    SnippetsWordAt(cm, pos) {
        var start = pos.ch, end = start, line = cm.getLine(pos.line);
        while (start && this.isWord(line.charAt(start - 1)))
            --start;
        while (end < line.length && this.isWord(line.charAt(end)))
            ++end;
        var fr = { line: pos.line, ch: start };
        var t = { line: pos.line, ch: end };
        return { from: fr, to: t, word: line.slice(start, end) };
    }
    getWordBoundaries(editor) {
        var cursor = editor.getCursor();
        var line = cursor.line;
        cursor.ch;
        var word = this.SnippetsWordAt(editor, cursor);
        var wordStart = word.from.ch;
        var wordEnd = word.to.ch;
        return {
            start: {
                line: line,
                ch: wordStart
            },
            end: {
                line: line,
                ch: wordEnd
            },
        };
    }
    findSnippet(editor, cursorOrig, cursor) {
        var selectedText = this.getSelectedText(editor);
        Array.from(this.settings.wordDelimiters);
        '' + selectedText.split(' ').join('');
        var newStr = "";
        // without this finds next stop everywhere in file
        // if (selectedWoSpaces == '' || (selectedWoSpaces.length > 0 && wordDelimiters.indexOf(selectedWoSpaces[0]) >= 0 && cursorOrig.ch == cursor.ch)) {
        // editor.execCommand('goWordLeft');
        // editor.execCommand('goWordLeft');
        // selectedText = this.getSelectedText(editor);
        // var cursor = editor.getCursor('from');
        // }
        var i;
        var snippets = this.settings.snippets;
        for (i in snippets) {
            var snippet = snippets[i].split(' : ');
            if (selectedText == snippet[0]) {
                newStr = snippet[1];
            }
        }
        return newStr;
    }
    calculateCursorEndPos(nStr, cursor, endPosition) {
        var nlSymb = this.settings.newlineSymbol;
        var endSymbol = this.settings.endSymbol;
        var stopSymbol = this.settings.stopSymbol;
        var newStr = nStr.split('\n').join('');
        if (newStr.indexOf(stopSymbol) == -1) {
            var rawEnd = newStr.indexOf(endSymbol);
            if (rawEnd == -1)
                rawEnd = newStr.length;
            var lastNl = newStr.substring(0, rawEnd).lastIndexOf(nlSymb);
            if (lastNl != -1)
                var endPosIndex = rawEnd - lastNl - nlSymb.length - cursor.ch;
            else
                var endPosIndex = rawEnd;
        }
        else {
            var endPosIndex = 0;
        }
        nlSymb = nlSymb.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); //no special symbols in nlSymb
        var rg = nlSymb + '\\n' + '|' + nlSymb;
        const regex = new RegExp(rg);
        const regexF = new RegExp(rg, 'g');
        var nlinesCount = (newStr.substring(0, rawEnd).match(regexF) || []).length;
        endPosition.nlinesCount = nlinesCount;
        endPosition.position = endPosIndex;
        newStr = newStr.split(regex).join('\n');
        newStr = newStr.replace(endSymbol, '');
        return newStr;
    }
    insertSnippet(key = '', snippetStartpos = { ch: -1, line: -1 }) {
        let activeLeaf = this.app.workspace.activeLeaf;
        let editor = activeLeaf.view.sourceMode.cmEditor;
        // let editor = activeLeaf.view.editor;
        var cursorOrig = editor.getCursor();
        var wasSelection = editor.somethingSelected();
        var cursor = editor.getCursor('from');
        if (wasSelection) {
            ({ start: cursor, end: editor.getCursor('to') });
        }
        else {
            this.getWordBoundaries(editor);
        }
        var stopSymbol = this.settings.stopSymbol;
        var pasteSymbol = this.settings.pasteSymbol;
        var stopFound = false;
        var newStr = "";
        newStr = this.findSnippet(editor, cursorOrig, cursor);
        cursor = editor.getCursor('from');
        //proceed Tab and Spacebar
        var endCursor = editor.getCursor('to');
        if (newStr == "" ||
            (key == 'Space' && (cursorOrig.ch != endCursor.ch || cursorOrig.line != endCursor.line))) {
            if (wasSelection == false) {
                editor.getDoc().setSelection(cursorOrig, cursorOrig);
            }
            if (key == 'Space')
                return false;
            if (newStr == "") {
                editor.setCursor(cursorOrig);
                return this.nextStop();
            }
        }
        //find end position
        var endPosition = { nlinesCount: 0, position: 0 };
        newStr = this.calculateCursorEndPos(newStr, cursor, endPosition);
        if (newStr.indexOf(stopSymbol) != -1)
            stopFound = true;
        if (newStr.indexOf(pasteSymbol) != -1)
            snippetStartpos = cursor;
        editor.replaceSelection(newStr);
        if (stopFound) {
            editor.setCursor({
                line: cursor.line,
                ch: cursor.ch
            });
            return this.nextStop();
        }
        else {
            editor.setCursor({
                line: cursor.line + endPosition.nlinesCount,
                ch: cursor.ch + endPosition.position
            });
        }
        editor.focus();
        return true;
    }
    adjustCursor(editor, cursor, newStr, oldStr) {
        var cursorOffset = newStr.length - oldStr.length;
        this.adjustCursorOffset(editor, cursor, cursorOffset);
    }
    adjustCursorOffset(editor, cursor, cursorOffset) {
        editor.setCursor({
            line: cursor.line,
            ch: cursor.ch + cursorOffset
        });
    }
    handleKeyDown(cm, event) {
        if ((event.key == 'Tab' && this.settings.useTab) || (event.code == 'Space' && this.settings.useSpace)) {
            this.SnippetOnTrigger(event.code, true);
        }
    }
    SnippetOnTrigger(key = '', preventDef = false) {
        let activeLeaf = this.app.workspace.activeLeaf;
        let cm = activeLeaf.view.sourceMode.cmEditor;
        var cursorSt = cm.getCursor();
        if (this.insertSnippet(key, cursorSt)) {
            if (preventDef) {
                event.preventDefault();
                if (this.settings.isWYSIWYG && key == 'Tab') {
                    // delete '\t' in Live preview
                    var search = cm.searchCursor('\t', cursorSt);
                    if (search.findPrevious()) {
                        search.replace('');
                    }
                }
            }
            if (cursorSt.ch >= 0 && cursorSt.line >= 0) { //paste text from clipboard
                cm.getCursor();
                navigator.clipboard.readText().then((clipText) => {
                    if (this.settings.isWYSIWYG == false) {
                        var search = cm.getSearchCursor(this.settings.pasteSymbol, cursorSt);
                    }
                    else {
                        var search = cm.searchCursor(this.settings.pasteSymbol, cursorSt);
                    }
                    if (search.findNext()) {
                        search.replace(clipText);
                    }
                });
            }
            return true;
        }
        return this.nextStop();
    }
    nextStop() {
        let activeLeaf = this.app.workspace.activeLeaf;
        let cm = activeLeaf.view.sourceMode.cmEditor;
        if (this.settings.isWYSIWYG == false) {
            var search = cm.getSearchCursor(this.settings.stopSymbol, cm.getCursor());
        }
        else {
            var search = cm.searchCursor(this.settings.stopSymbol, cm.getCursor());
        }
        if (search.findNext()) {
            search.replace("");
            if (this.settings.isWYSIWYG == false) {
                cm.setCursor(search.from());
            }
            else {
                cm.setCursor(search.current().from);
            }
            return true;
        }
        else if (this.settings.useTab) {
            return false;
        }
        return false;
    }
}
const DEFAULT_SETTINGS = {
    snippets_file: "snippets : It is an obsidian plugin, that replaces your selected text.",
    snippets: ["snippets : It is an obsidian plugin, that replaces your selected text."],
    endSymbol: '$end$',
    newlineSymbol: '$nl$',
    stopSymbol: "$tb$",
    pasteSymbol: "$pst$",
    useTab: true,
    useSpace: false,
    wordDelimiters: "$()[]{}<>,.!?;:\'\"\\/",
    isWYSIWYG: false,
};
class TextSnippetsSettingsTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        let { containerEl } = this;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Text Snippets - Settings' });
        new obsidian.Setting(containerEl)
            .setName("Snippets")
            .setDesc("Type here your snippets in format 'snippet : result', one per line. Empty lines will be ignored. Ctrl+Tab to replace (hotkey can be changed).")
            .setClass("text-snippets-class")
            .addTextArea((text) => text
            .setPlaceholder("before : after")
            .setValue(this.plugin.settings.snippets_file)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.snippets_file = value;
            this.plugin.UpdateSplit(this.plugin.settings.newlineSymbol);
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName("Cursor end position mark")
            .setDesc("Places the cursor to the mark position after inserting a snippet (default: $end$).\nMark does not appear anywhere within the snippet. Do not use together with Stop Symbol.")
            .setClass("text-snippets-cursor")
            .addTextArea((text) => text
            .setPlaceholder("$end$")
            .setValue(this.plugin.settings.endSymbol)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            if (value == '') {
                value = '$end$';
            }
            this.plugin.settings.endSymbol = value;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName("Newline mark")
            .setDesc("Ignores newline after mark, replace it with a newline character after expanding (default: $nl$).\nNecessary to write before every line break in multiline snippets.")
            .setClass("text-snippets-newline")
            .addTextArea((text) => text
            .setPlaceholder("$nl$")
            .setValue(this.plugin.settings.newlineSymbol)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            if (value == '') {
                value = '$nl$';
            }
            this.plugin.settings.newlineSymbol = value;
            this.plugin.UpdateSplit(value);
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName('Stop Symbol')
            .setDesc('Symbol to jump to when command is called.')
            .setClass("text-snippets-tabstops")
            .addTextArea((text) => text
            .setPlaceholder('')
            .setValue(this.plugin.settings.stopSymbol)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            if (value == '') {
                value = '$tb$';
            }
            this.plugin.settings.stopSymbol = value;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName('Clipboard paste Symbol')
            .setDesc('Symbol to be replaced with clipboard content.')
            .setClass("text-snippets-tabstops")
            .addTextArea((text) => text
            .setPlaceholder('')
            .setValue(this.plugin.settings.pasteSymbol)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            if (value == '') {
                value = '$pst$';
            }
            this.plugin.settings.pasteSymbol = value;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName("Expand on Tab")
            .setDesc("Use the Tab key as the trigger.")
            .addToggle(toggle => toggle.setValue(this.plugin.settings.useTab)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.useTab = !this.plugin.settings.useTab;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName("Expand on Space")
            .setDesc("Use the Space bar button as the trigger.")
            .addToggle(toggle => toggle.setValue(this.plugin.settings.useSpace)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.useSpace = !this.plugin.settings.useSpace;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName("Live Preview Mode")
            .setDesc("Toggle manually if not correct. You should restart plugin after changing this option.")
            .addToggle(toggle => toggle.setValue(this.plugin.settings.isWYSIWYG)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.isWYSIWYG = !this.plugin.settings.isWYSIWYG;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName('Word delimiters')
            .setDesc('Сharacters for specifying the boundary between separate words.')
            .setClass("text-snippets-delimiter")
            .addTextArea((text) => text
            .setPlaceholder('')
            .setValue(this.plugin.settings.wordDelimiters)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.wordDelimiters = value;
            yield this.plugin.saveSettings();
        })));
    }
}

module.exports = TextSnippets;


/* nosourcemap */