import React from "react";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
    return <S.WrapperTabs
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected
    ">
        <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>    
        <S.WrapperTabPanel>
            <RepositoryItem 
            name = "front-end-componetizado" linkToRepo = "https://github.com/ulissesmarciano/impulso-dio-projeto-front-end-compnetizado"
            fullName = "ulissesmarciano/impulso-dio-projeto-front-end-compnetizado"
            />
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
            <RepositoryItem 
            name = "fundamentos-html-css" linkToRepo = "https://github.com/ulissesmarciano/impulso-js-fundamentos-web-html-css"
            fullName = "ulissesmarciano/impulso-js-fundamentos-web-html-css"
            />
        </S.WrapperTabPanel>

    </S.WrapperTabs>
};

export default Repositories