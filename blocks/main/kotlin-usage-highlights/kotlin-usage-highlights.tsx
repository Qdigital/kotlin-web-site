import React, { FC } from 'react';
import { cardCn } from '@rescui/card';
import classNames from 'classnames';
import styles from './kotlin-usage-highlights.module.css';
import { useTextStyles } from '@rescui/typography';
import { useTS, useTM } from '@jetbrains/kotlin-web-site-ui/out/components/breakpoints';
import { Tag, presets } from '@rescui/tag';

interface KotlinUsageHighlightsItem {
    company: string;
    url: string;
    text: string;
    logo: ImgSrc;
    tag: string;
}

interface KotlinUsageHighlightsProps {
    title: string;
    items: KotlinUsageHighlightsItem[];
}

export const KotlinUsageHighlights: FC<KotlinUsageHighlightsProps> = ({ title, items }) => {
    const cardClassName = classNames(cardCn({ paddings: 16, isClickable: true }), styles.card);
    const textCn = useTextStyles();
    const isTS = useTS();
    const isTM = useTM();
    const visibleItems = isTS ? items.slice(0, 4) : items;
    const headerClass = isTS ? 'rs-h3' : 'rs-h2';
    const textClass = isTM ? 'rs-text-3' : 'rs-text-2';


    const tagStyle= {
        ...presets.filledLight,
    };

    return (
        <div className={styles.kotlinUsageHighlights}>
            <h2 className={classNames(textCn(headerClass), styles.title)}>{title}</h2>

            <div className={styles.container}>
                {visibleItems.map((item) => (
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={cardClassName}
                        key={item.company}
                    >
                        <div className={styles.cardContent}>
                            <div className={styles.logoWrapper}>
                                <img src={item.logo.src} alt={item.company} className={styles.logo} />
                            </div>
                            <span className={classNames(textCn(textClass, { hardness: 'hard' }), styles.text)}>
                                {item.text}
                            </span>
                            <span className={styles.tag}>
                                <Tag {...tagStyle}>{item.tag}</Tag>
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};
