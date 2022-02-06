import { useEffect, useMemo, useState } from "react";
import EmployeeModel from "../../core/model/employee";
import PrismicService from "../services/prismic";

const useClients = () => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await PrismicService.getSingle("clients-page");

      setData(data);
      setIsLoading(false);
    })();
  }, []);

  const employees = useMemo(
    () =>
      data?.body?.length
        ? (data.body as any[])
            .find(({ slice_type }) => slice_type === "employees")
            .items.map(EmployeeModel.fromPrismic)
        : [],
    [data]
  );

  const title = useMemo(
    () => (data?.title?.length ? data.title[0].text : undefined),
    [data]
  );

  const about = useMemo(() => (data?.about?.length ? data.about : []), [data]);

  return {
    data,
    title,
    about,
    employees,
    isLoading,
  };
};

export default useClients;
