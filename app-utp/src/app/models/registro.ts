export interface Registro {
  id?: number;
  nombre: string;
  correo: string;
  tipoApp: string;
  fecha?: string;
}
export interface ApiRespuesta {
  ok: boolean;
  mensaje: string;
  data?: Registro;
}
