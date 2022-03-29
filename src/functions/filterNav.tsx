import { TheCardInfoProps, emptyCardInfo } from "../components/cardInfo"

export const filterBySearch = (filter: string, blogs: TheCardInfoProps): TheCardInfoProps => {
    let blogsByTitle:TheCardInfoProps = emptyCardInfo;

    blogsByTitle.props = blogs.props.filter((word) => word.title.toLowerCase().includes(filter.toLowerCase()));

    return blogsByTitle
}

export const filterByFramework = (filter: string, blogs: TheCardInfoProps): TheCardInfoProps => {
    let blogsByFramework:TheCardInfoProps = emptyCardInfo;

    blogsByFramework.props = blogs.props.filter(word => word.keyword === filter);

    return blogsByFramework;

}

