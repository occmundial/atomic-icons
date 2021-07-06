import { makeVar, ReactiveVar } from '@apollo/client';

export const helloVar: ReactiveVar<string> = makeVar('world');
