import { NormalSemiBoldText } from 'common/typography';
import React from 'react';
import rankIcon from 'assets/rank_icon.png';
import { useAuthorsQuery, Enum_Members_Gender } from 'generated/graphql';
import getAvatarSrc from 'common/getAvatarSrc';
import { orderBy } from 'lodash';
import { Wrapper, AuthorAvatar } from './AuthorRanking.styled';

const AuthorRanking = () => {
    const { data } = useAuthorsQuery();

    const postByAuthors = data?.posts?.reduce((result, currentPost) => {
        if (
            result.some(({ authorId }) => authorId === currentPost?.author?.id)
        ) {
            result.forEach(({ authorId, postAmount }, i) => {
                if (
                    authorId === currentPost?.author?.id &&
                    authorId &&
                    postAmount
                ) {
                    // eslint-disable-next-line no-param-reassign
                    result[i] = {
                        authorId,
                        authorName: currentPost?.author?.fullName,
                        postAmount: postAmount + 1,
                    };
                }
            });
        } else {
            result.push({
                authorId: currentPost?.author?.id,
                authorName: currentPost?.author?.fullName,
                authorGender: currentPost?.author?.gender,
                authorAvatarUrl: currentPost?.author?.avatar?.url,
                postAmount: 1,
            });
        }
        return result;
    }, [] as Partial<{ authorId: string; authorName: string; authorGender: Enum_Members_Gender | null; authorAvatarUrl: string | null; postAmount: number }>[]);

    return (
        <Wrapper>
            <h2>Bảng xếp hạng tác giả</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            <img src={rankIcon} alt="rank icon" />
                        </th>
                        <th>Tác giả</th>
                        <th>Bài viết</th>
                    </tr>
                </thead>
                <tbody>
                    {orderBy(postByAuthors, 'postAmount', 'desc')
                        ?.filter((post) => post?.authorId)

                        .map((post, i) => (
                            <tr key={post?.authorId}>
                                <td>
                                    <NormalSemiBoldText>
                                        {i + 1}
                                    </NormalSemiBoldText>
                                </td>
                                <td>
                                    <AuthorAvatar
                                        src={getAvatarSrc(
                                            post?.authorGender,
                                            post?.authorAvatarUrl
                                        )}
                                    />
                                    <NormalSemiBoldText>
                                        {post?.authorName}
                                    </NormalSemiBoldText>
                                </td>
                                <td>
                                    <NormalSemiBoldText>
                                        {post.postAmount}
                                    </NormalSemiBoldText>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Wrapper>
    );
};

export default AuthorRanking;
