import styled from '@emotion/styled'
import { breakPoints } from '../../../commons/styles/media'

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media ${breakPoints.mobile} {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const HeadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 100px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`

export const HeadLeft = styled.div`
  height: 218px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`

export const Avatar = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 70%;
  overflow: hidden;
`

export const NameAndSetting = styled.div`
  display: flex;
  align-items: flex-start;
`

export const Name = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-right: 7px;
`

export const HeadRight = styled.div`
  width: 80%;
  background-color: #1e2744;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 55px 60px 55px 60px;
`

export const HeadRightSection = styled.div`
  width: 19%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  animation: fadein 1s ease-in-out;
  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`

export const HeadRightSectionLabel = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 10px;
  text-transform: uppercase;
  color: #bdbdbd;
`

export const HeadRightSectionContents1 = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 10px;
  color: #f2f2f2;
`

export const HeadRightSectionContents2 = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 10px;
  color: #f2f2f2;
`

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media ${breakPoints.tablet} {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media ${breakPoints.mobile} {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const TabMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .focused {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }
  .submenu {
    cursor: pointer;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
  }

  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .focused {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
    }
    .submenu {
      cursor: pointer;
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
    }
  }
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .focused {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
    }
    .submenu {
      cursor: pointer;
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
    }
  }
`
export const Menu = styled.div`
  width: 140px;
  margin-bottom: 48px;
`
export const Contents = styled.div`
  width: 957px;
  @media ${breakPoints.tablet} {
    width: 90%;
  }
  @media ${breakPoints.mobile} {
    width: 90%;
  }
`
