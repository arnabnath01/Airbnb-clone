import {create } from 'zustand'

interface RegisterModelStore {
    isOpen : boolean;
    onOpen:()=>void;
    onClose:()=>void;
}