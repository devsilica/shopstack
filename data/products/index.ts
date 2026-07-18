import type { Product } from "@/types/product";

import { sofas } from "./sofas";
import { chairs } from "./chairs";
import { coffeeTables } from "./coffee-tables";
import { beds } from "./beds";
import { nightstands } from "./nightstands";
import { diningTables } from "./dining-tables";

export const products: Product[] = [
  ...sofas,
  ...chairs,
  ...coffeeTables,
  ...beds,
  ...nightstands,
  ...diningTables,
];