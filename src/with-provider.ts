import { defineComponent, h, provide } from "vue";
import { XRenderInjectionKey } from "./context";

export default function withProvider() {
  return defineComponent({
    name: "ProviderComponent",
    setup(props, { slots }) {

      provide(XRenderInjectionKey, {});

      return () => {
        
        return h(
          "div",
          {},
          slots.default ? slots.default() : "No content provided"
        );
      };
    },
  });
}
