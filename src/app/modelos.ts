export interface Menu {
    Id_Menu: number;
    NomMenu: string;
    Url: string;
    Target: string;
    Hijos: Array<Menu>;
}

export interface Rol {
    Id_Rol: number;
    NomRol: string;
}

export interface Usuario {
    Id_Usuario: number;
    NomUsuario: string;
    Email: string;
    Identificador: string;
    Rol: Rol;
    Menu: Array<Menu>;
}

export interface Equipo {
    Id_Equipo: number;
    NomEquipo: string;
    CodTren: number;
    LVFramework: number;
}

export interface CategoriaMetrica {
    Id_CategoriaMetrica: number;
    NomCategoriaMetrica: string;
}

export interface TipoMetrica {
    Id_TipoMetrica: number;
    NomTipoMetrica: string;
    CategoriaMetrica: CategoriaMetrica;
}

export interface Metrica {
    Id_Metrica: number;
    NomMetrica: string;
    TipoMetrica: TipoMetrica;
    Proposito: string;
    OrigenInformacion: string;
    ComoSeCalcula: string;
    ComoUsarla: string;
    Herramienta: string;
    Sigla: string;
    EsFormula: boolean;
    Formula: string;
    ExpresionRegular: string;
    Orden: number;
    Activo: boolean;
}

