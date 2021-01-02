import {SetupContext, UnwrapRef, ref, computed, reactive, Ref} from "@vue/composition-api";

export const useVModelDeliver = <P extends { value: any }>(props: P, context: SetupContext) => {
  return computed({
    get() {
      return props.value;
    },
    set(newValue) {
      context.emit("input", newValue);
    }
  });
}

export const useRef = <V = any>(value: V) => {
  const valueRef = ref<V>(value);

  return [
    valueRef,
    (newValue: UnwrapRef<V>) => { valueRef.value = newValue },
  ]
}

