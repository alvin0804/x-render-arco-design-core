import { inject, InjectionKey } from "vue"


export const XRenderInjectionKey: InjectionKey<XRenderContext> = Symbol('XRenderInjectionKey');

export type XRenderContext = Readonly<{}>

export function useXRenderContext() {
    return inject<XRenderContext>(XRenderInjectionKey)
}