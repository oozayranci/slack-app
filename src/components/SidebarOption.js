import React from 'react';
import styled from "styled-components";

function SidebarOption({ Icon, title }) {
    return (
        <SidebarOptionContainer>
            {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
            {Icon ? (
            <h3>{title}</h3>
        ): (
            <SidebarOptionChannel>
                <span>#</span> {title}
            </SidebarOptionChannel>
        )}
        </SidebarOptionContainer>
        
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div``;

const SidebarOptionChannel = styled.div``;
