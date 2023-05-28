// 

import * as Styles from '../../scss/App.css'

export const getStaticProps = async () => {
    // NewsAPIのトップ記事の情報を取得
    const pageSize = 10     // 取得したい記事の数
    const topRes = await fetch(
      `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=700c4dc0ca0e41c08833e09e346e3655`
    );
    const topJson = await topRes.json();
    const topArticles = topJson?.articles;
  
    return {
      props: {
        topArticles,
      },
      revalidate: 60 * 10,
    };
  };
  


const Article: React.FC<props> = ({ article, title }) => {
    return (
        <section className={App.article}>
            <div className={App.article__heading}>
                <h1>{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase}</h1>
            </div>
        </section>
    )
}