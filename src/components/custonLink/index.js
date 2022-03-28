import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";

const LinkCustom = styled(Link)`
  margin-right: 16px;
  text-decoration: none;
  padding: 8px 24px;
  width: 50px;
  border-radius: 16px;

  ${({ match }) =>
    match
      ? `
    background:#ff7f3f;
    color: #fff;
  `
      : `
    border: 1px solid #334756;
    color: #ff4c29;
    `}
  :hover {
    background: #ff4c29;
    color: #fff;
  }
`;

export function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <LinkCustom match={match} to={to} {...props}>
      {children}
    </LinkCustom>
  );
}
