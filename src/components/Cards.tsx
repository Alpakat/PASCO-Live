import styles from './Cards.module.css'

export function Card({
	title,
	indicatorState,
	rows,
}: {
	title: string
	indicatorState: 'green' | 'yellow' | 'red'
	rows: ({ idSeperator: true } | { label: string; value: string })[]
}) {
	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<div className={styles.indicator} style={{ backgroundColor: `var(--${indicatorState})` }}></div>
				<h2 className={styles.title}>{title}</h2>
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
					<path d="M10.5 0.5L8.75 2.25L12.25 5.75L14 4L10.5 0.5ZM7 4L0 11V14.5H3.5L10.5 7.5L7 4Z" fill="white" />
				</svg>
			</div>
			<div className={styles.content}>
				{rows.map((row, index) => {
					if ('idSeperator' in row) {
						return <div className={styles.seperator} key={index}></div>
					}
					return (
						<div className={styles.row} key={index}>
							<p>{row.label}</p>
							<p>{row.value}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}