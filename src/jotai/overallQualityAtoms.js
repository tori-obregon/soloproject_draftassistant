import { atom } from 'jotai';

const testAtom = atom(0);
testAtom.debugLabel = "testAtom";

const strongCategoriesAtom = atom("-");
strongCategoriesAtom.debugLabel = "Strong Categories";

export {testAtom, strongCategoriesAtom};