export default `
  .userCard_row {
    display: flex;
  }
  
  .userCard__rightContentContainer {
    display: inline-flex;
    flex-direction: column;
    max-width: 210px;
  }
  
  .userCard__rightContentContainer span {
    margin-bottom: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  .userCard__avatar {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-right: 40px;
  }
`;
