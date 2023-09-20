import styled from "styled-components";

export const QuickAccessWrapper = styled.div`
  display: grid;
  gap: 6px;
  grid-template-columns: repeat( auto-fill, minmax(80px, 1fr));

  .qc-box {
    border: 1px solid;

    &.qc-border-1 {
      border-color: #FCF0F0;
    }
    &.qc-border-2 {
      border-color: #F2F0FC;
    }
    &.qc-border-3 {
      border-color: #FDF4EB;
    }
    &.qc-border-4 {
      border-color: #EBF8E7;
    }
    &.qc-border-5 {
      border-color: #FCF0FB;
    }
    &.qc-border-6 {
      border-color: #F0F6FC;
    }
    &.qc-border-7 {
      border-color: #F5EAE5;
    }
    &.qc-border-8 {
      border-color: #D1EDF1;
    }
    &.qc-border-9 {
      border-color: #FFFAE8;
    }
    
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 60px;
      padding: 5px;
      font-size: 11px; 

      i {
        display: inline-block;
        width: 15px;
        height: 15px;
        background-size: contain;
        margin-bottom: 6px;
      }
    }
  }
`;