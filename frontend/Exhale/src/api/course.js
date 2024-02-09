import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
  // 코스 조회
  const getCourseList = async (token) => {
    return await axios.get(baseURL + '/api/rehabilitation',{
    headers: {
        Authorization: token
      }
    })
  };

  // 카테고리 조회
  const getCategoryList = async (courseId, token) => {
    return await axios.get(baseURL + `/api/rehabilitation/${courseId}`,{
    headers: {
        Authorization: token
      }
    })
  };
  // 문제 조회
  const getProblem = async (categoryId, token) => {
    return await axios.get(baseURL + `/api/rehabilitation/problem/${categoryId }`,{
    headers: {
        Authorization: token
      }
    })
  };
  // 푼문제 저장
  const postSolvedProblem = async (params, token) => {
    const datas = {
      problem_id : params.problemId,
      is_right : params.isRight,
      time : params.time
    }
    return await axios.post(baseURL + '/api/rehabilitation/result',datas,{
    headers: {
        Authorization: token
      }
    })
  };
  // 초성, 중성, 종성 리스트 요청
  const getSyllableList = async (params) => {
    return await axios.get(baseURL + '/api/rehabilitation/letter',{
    headers: {
        Authorization: token
      }
    })
  };

  // 초성, 중성, 종성 기록 저장 요청
  const postSyllable = async (params) => {
    return await axios.post(baseURL + '/api/rehabilitation/letter/result',params,{
    headers: {
        Authorization: token
      }
    })
  };
  // 유창성 정답 확인 요청
  const checkfluencyAnswer = async (params) => {
    return await axios.post(baseURL + '/api/rehabilitation/fluency-check',params,{
    headers: {
        Authorization: token
      }
    })
  };

  // 복습 문제 저장
  const postReview = async (problem_id, token) => {
    const datas = {
      problem_id : problem_id
    }
    return await axios.post(baseURL + '/api/rehabilitation/review',datas,{
    headers: {
        Authorization: token
      }
    })
  };
  // 복습 문제 삭제
  const deleteReview = async (problemId) => {
    return await axios.delete(baseURL + `/api/rehabilitation/review/${problemId}`,{
    headers: {
        Authorization: token
      }
    })
  };
  // 복습 문제집 요청
  const getReviewProblem = async (courseId) => {
    return await axios.get(baseURL + `/api/rehabilitation/review-problem/${courseId}`,{
    headers: {
        Authorization: token
      }
    })
  };
export {
    getCourseList,
    getCategoryList,
    getProblem,
    postSolvedProblem,
    getSyllableList,
    postSyllable,
    checkfluencyAnswer,
    postReview,
    deleteReview,
    getReviewProblem,

};