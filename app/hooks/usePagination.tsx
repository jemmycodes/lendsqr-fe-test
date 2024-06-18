import { useSearchParams, useRouter } from "next/navigation";

const usePagination = (dataSize: number) => {
  const router = useRouter();
  const params = new URLSearchParams(useSearchParams().toString());

  const page = Number(params.get("page") ?? 1);
  const start = Number(params.get("start") ?? 0);
  const end = Number(params.get("end") ?? 10);

  const handleOnNext = () => {
    if (end >= dataSize) return; // base case
    params.set("end", (end > dataSize ? dataSize : end + 10).toString());
    params.set("page", (page + 1).toString());
    params.set("start", (end + 1).toString());
    router.push(`?${params.toString()}`);
  };

  const handleOnPrevious = () => {
    if (start <= 0) return; // base case
    params.set("page", (page - 1).toString());
    params.set("end", (end - 10).toString());
    params.set("start", (start - 10).toString());
    router.push(`?${params.toString()}`);
  };

  const handlePageChange = (newPage: number) => {
    const newStart = (newPage - 1) * 10;
    const newEnd = newStart + 10;
    params.set("page", newPage.toString());
    params.set("start", newStart.toString());
    params.set("end", newEnd.toString());
    router.push(`?${params.toString()}`);
  };

  return { handleOnNext, handleOnPrevious, handlePageChange, end, start, page };
};

export default usePagination;
