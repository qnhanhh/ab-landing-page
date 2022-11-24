import { atom } from 'recoil';

export const gradeOpenState = atom({
    key: 'gradeOpenState',
    default: false
});

export const modalOpenState = atom({
    key: 'modalOpenState',
    default: false
});
