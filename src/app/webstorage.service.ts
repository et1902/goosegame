import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class WebStorageService {

    constructor() 
    {	
        if (window.localStorage) {
            console.log('LocalStorage API supported!')
        }
    }

    public check()
    {
        return localStorage.length > 0;
    }

    public write(key, obj)
    {
        localStorage.setItem(key, JSON.stringify(obj));
    }

    public read( key )
    {
        return JSON.parse(localStorage.getItem(key));
    }

    public delete( key )
    {
        localStorage.removeItem(key);
    }

    public clear()
    {
        localStorage.clear();
    }
}