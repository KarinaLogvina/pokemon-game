import s from './layout.module.css';

const Layout = ({title, desc, urlBg, colorBg}) => {
    const background = urlBg ? {backgroundImage: `url(${urlBg})`} : {backgroundColor: `${colorBg}`}
    
    return (
        <section className={s.root} style={background}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        <p>{desc}</p>
                    </div>
                </article>
            </div>
        </section>
    )
};

export default Layout;