import AnchorLink from "react-anchor-link-smooth-scroll"

interface Props{
    page: string;
}

const Link = ({page}: Props) => {
  return (
    <AnchorLink
    classID=""
    href=""
    // onClick={() => }
    >
        {page}
    </AnchorLink>
  )
}

export default Link