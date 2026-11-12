import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Admin',
                items: [
                    { label: 'Admin', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] },
                    { label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: ['/admin/profile'] }
                ]
            },
            {
                label: 'Inventory',
                items: [
                    { label: 'Category', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/category'] },
                    { label: 'Product', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/product'] }
                ]
            },
            {
                label: 'Orders',
                items: [
                    { label: 'Orders List', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/orders'], badge: 'NEW' },
                    { label: 'New Order', icon: 'pi pi-fw pi-plus', routerLink: ['/admin/orders/new'], badge: 'NEW' },
                    { label: 'Clients', icon: 'pi pi-fw pi-users', routerLink: ['/admin/clients'], badge: 'NEW' },
                ]
            },
            {
                label: 'Users & Roles',
                items: [
                    { label: 'Users', icon: 'pi pi-fw pi-users', routerLink: ['/admin/users'] },
                    { label: 'Roles', icon: 'pi pi-fw pi-key', routerLink: ['/admin/roles'] },
                ]
            },
        ];
    }
}
