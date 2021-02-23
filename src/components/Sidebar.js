import  FiberManualRecordIcon  from '@material-ui/icons/FiberManualRecord';
import React from 'react';
import styled from "styled-components";

function Sidebar () {
  return (
      <SidebarContainer>
          <SidebarHeader>
              <SidebarInfo>
                <h2>SiderBAR</h2>
                <h3>
                    <FiberManualRecordIcon />
                    Ozan Özayranci
                </h3>
              </SidebarInfo>
          </SidebarHeader>
      </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div``;

const SidebarHeader = styled.div``;

const SidebarInfo = styled.div``;