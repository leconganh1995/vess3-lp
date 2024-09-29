import { useEffect } from "react";
import _ from "lodash";
import { useHashChange } from "@/hooks/useHashchange";

export const useScrollIntoSection = () => {
  const { hash } = useHashChange();

  useEffect(() => {
    if (hash) {
      const id = _.get(hash.split("#"), "1");
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
