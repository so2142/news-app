
export const getStaticProps =  async () =>{
    const pageSize = 10      // 取得したい記事の数
    const topRes = await fetch(
        'https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}'
    )
}




const Article: React.FC<props> = ({ article, title }) => {
    return (
        <section className={styles.article}>
            <div className={StyleSheet.article__heading}>
                <h1>{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase}</h1>
            </div>
        </section>
    )
}