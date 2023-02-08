import { MenuItem } from './../model/menu-item.model';
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    MENU_ITEM_LOCAL_STORAGE_ID = 'themeId';
    private _themeList: MenuItem[] = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
        { id: '6' },
        { id: '7' },
        { id: '8' },
    ];
    selectedMenuItem$: BehaviorSubject<MenuItem> = new BehaviorSubject<MenuItem>(this.themeList?.[0]);

    constructor(@Inject(DOCUMENT) private document: Document) {
        const id = localStorage.getItem(this.MENU_ITEM_LOCAL_STORAGE_ID);
        if (id) {
            let item = this.themeList.find(item => item.id === id);
            if (item) {
                this.selectedMenuItem$.next(item);
            }
        }
        this.selectedMenuItem$.subscribe((menuItem) => {
            localStorage.setItem(this.MENU_ITEM_LOCAL_STORAGE_ID, menuItem.id);
            this.themeList.forEach(item => {
                this.document.body.classList.remove(`theme-${item.id}`);
            });
            this.document.body.classList.add(`theme-${menuItem.id}`);
        });
    }

    public get themeList(): MenuItem[] {
        return this._themeList;
    }
    public set themeList(value: MenuItem[]) {
        this._themeList = value;
    }


    changeTheme(menuItem: MenuItem) {
        this.selectedMenuItem$.next(menuItem);
    }
}