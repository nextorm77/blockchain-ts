"use strict";
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
    updateDef(def) {
        this.def = def;
    }
    addDef(def) {
        this.def = `${this.def}. ${def}`;
    }
    print() {
        console.log(`단어명: ${this.term}\n정의: ${this.def}`);
    }
}
class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term) {
        return this.words[term];
    }
    updateWord(term, def) {
        this.words[term] = def;
    }
    deleteWord(term) {
    }
}
const kimchi = new Word("kimchi", "한국 음식");
kimchi.updateDef("Korean food");
kimchi.addDef("한국의 전통 음식");
kimchi.print();
const dict = new Dict();
dict.add(kimchi);
dict.updateWord("kimchi", "배추를 발효한 음식");
console.log(dict.def("kimchi"));
