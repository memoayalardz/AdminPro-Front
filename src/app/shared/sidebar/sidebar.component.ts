import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public usuario:Usuario;
  
  menuItems: any[];

  constructor( private usuarioService:UsuarioService,private sidebarService: SidebarService ) {
    this.menuItems = sidebarService.menu;
    console.log(this.menuItems)
  
    this.usuario = usuarioService.usuario;
    console.log(this.usuario.imagenUrl);
    

  }

  ngOnInit(): void {
  }

}
