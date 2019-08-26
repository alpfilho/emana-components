// import { useContext, useEffect } from 'react';
// import { viewportContext as context } from '../contexts/viewport/viewport.context';
//
// /**
//  * Hook para executar callbacks sempre que o scroll do contexto atualizar.
//  */
// export const useScrollListener = ({ onScroll }) => {
// 	const viewportContext = useContext(context);
//
// 	useEffect(() => {
// 		const scrollListener = viewportContext.addListener(onScroll);
// 		return () => {
// 			scrollListener.removeListener();
// 		};
// 	}, [viewportContext, onScroll]);
// };
