import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import paginationStyles from "./pagination.module.scss";
import usePagination from "@/app/hooks/usePagination";

interface PaginationProps {
  page: number;
  dataSize: number;
  currentDetail: number;
  onHandleNext: () => void;
  onHandlePrevious: () => void;
}

const Pagination = ({
  page,
  dataSize,
  onHandleNext,
  currentDetail,
  onHandlePrevious,
}: PaginationProps) => {
  const { handlePageChange } = usePagination(dataSize);

  return (
    <div className={paginationStyles.pagination__container}>
      <p>
        Showing{" "}
        <span className={paginationStyles.current_detail}>
          {currentDetail}
          <IoIosArrowDown
            style={{
              marginLeft: "15px",
            }}
          />
        </span>
        out of {dataSize}
      </p>
      <div className={paginationStyles.pagination__cta}>
        <button
          className={paginationStyles.pagination__cta__button}
          onClick={(e) => {
            e.preventDefault();
            onHandlePrevious();
          }}
        >
          <IoIosArrowBack />
        </button>
        {Array.from({ length: Math.ceil(dataSize / 10) }, (_, i) => {
          if (i < 3 || i > Math.ceil(dataSize / 10) - 4) {
            console.log(i + 1, page);
            return (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={i + 1 === page ? paginationStyles.active__page : ""}
              >
                {i + 1}
              </button>
            );
          } else if (i === 3 || i === Math.ceil(dataSize / 10) - 4) {
            return (
              <button key={i} onClick={() => handlePageChange(i + 1)}>
                ...
              </button>
            );
          } else {
            return null;
          }
        })}
        <button
          className={paginationStyles.pagination__cta__button}
          onClick={(e) => {
            e.preventDefault();
            onHandleNext();
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
