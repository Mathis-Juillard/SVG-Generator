import PocketBase from 'pocketbase';
import type { TypedPocketBase } from "./pocketbase-types";

let path = '';
if (import.meta.env.MODE === 'development') {
  path = 'http://localhost:8090';      // machine de dev
} else {
  path = 'http://localhost:8083';      // VPS (PocketBase)
}
const pb = new PocketBase(path) as TypedPocketBase;
export default pb;
