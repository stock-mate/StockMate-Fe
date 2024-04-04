import Link from "next/link";

const SuggestionList = ({
  suggestions,
}: {
  suggestions: { TICKER: string; COMNAME: string }[];
}) => {
  const suggestionsHTML = suggestions?.map(({ TICKER, COMNAME }) => (
    <li key={`${TICKER}_${COMNAME}`}>
      <Link href={`/stocks/${TICKER}`} className="block p-2 border hover:bg-slate-100">
        {COMNAME}
      </Link>
    </li>
  ));

  return (
    <ul className="absolute top-[3.6rem] bg-white w-[48rem] max-h-96 overflow-y-auto shadow-xl">
      {suggestionsHTML}
    </ul>
  );
};

export default SuggestionList;

/*
input focus 유무에 따라 suggest list를 표출 하냐 마냐를 결정해야한다
1. focus 유무를 캐치해서 header component에서 컨트롤하게 만들기 
-> 그려려면 header는 client component가 되어야만 한다.
-> 이걸 방지하려면 전역 상태관리 라이브러리를 이용하면 어떨까

그럼 header로 안보내도 되잖아 데이터를
-> context api 붙이자
*/
