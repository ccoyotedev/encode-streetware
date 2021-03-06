import css from "styled-jsx/css";

const styles = css`
  .wallet-card {
    position: relative;
    border: none;
    background-color: white;
    padding: 0;
    cursor: pointer;
  }
  .wallet-card:hover {
    background-color: #faf7fe;
  }

  .wallet-card:disabled {
    box-shadow: none !important;
  }
  .wallet-card:disabled:active .image-inner img {
    transform: scale(1);
  }
  .wallet-card:active .imager-inner img {
    transform: scale(0.95);
  }

  .error {
    font-size: 12px;
    font-weight: 400;
    position: absolute;
    bottom: calc(100% + 5px);
    left: 0;
  }

  .inner {
    width: 100%;
    height: 100px;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 16%) 0px 1px 3px 0px;
    transition-property: box-shadow;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    border: 1px solid transparent;
    padding: 17px 8px 8px;
  }

  .image-inner {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: auto;
  }
  .image-inner img {
    max-width: 30px;
    max-height: 30px;
    transform: scale(1);
    transition: 300ms;
  }

  .text-inner {
    text-align: center;
  }
  .text-inner p {
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 0;
    padding-bottom: 0;
    line-height: 1;
  }
  .text-inner span {
    display: block;
    font-weight: 300;
    font-size: 8px;
    margin-top: 4px;
  }
`;

export default styles;
