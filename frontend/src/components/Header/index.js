import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";

export default function Header() {
    return (
        <S.Header>
            <S.Title>
                <S.StyledLink to="/" exact>
                    Dev<span>Challenge</span>
                </S.StyledLink>
            </S.Title>
            <S.Menu>
                <ul>
                    <li>
                        <S.StyledLink activeClassName="is-active" to="/" exact>
                            Início
                        </S.StyledLink>
                    </li>
                    <li>
                        <S.StyledLink
                            activeClassName="is-active"
                            to="/challenges"
                        >
                            Desafios
                        </S.StyledLink>
                    </li>
                    <li>
                        <S.StyledLink activeClassName="is-active" to="/devs">
                            Ninjas
                        </S.StyledLink>
                    </li>
                </ul>
            </S.Menu>
        </S.Header>
    );
}
