import { strict } from "joi"

'use strict';

export type Feature = {
    name: string;
    description?: string;
    active: boolean;
}