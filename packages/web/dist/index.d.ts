import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';
import * as _tiptap_extension_underline from '@tiptap/extension-underline';
import * as _tiptap_core from '@tiptap/core';
import * as _tiptap_extension_horizontal_rule from '@tiptap/extension-horizontal-rule';

interface GenerativeMenuSwitchProps {
    children: ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
declare const GenerativeMenuSwitch: ({ children, open, onOpenChange }: GenerativeMenuSwitchProps) => react_jsx_runtime.JSX.Element | null;

declare const defaultExtensions: (_tiptap_core.Node<_tiptap_extension_horizontal_rule.HorizontalRuleOptions, any> | _tiptap_core.Mark<_tiptap_extension_underline.UnderlineOptions, any> | _tiptap_core.Extension<any, any>)[];

export { GenerativeMenuSwitch, defaultExtensions };
