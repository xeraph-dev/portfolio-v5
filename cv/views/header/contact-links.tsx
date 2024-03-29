import { Link, StyleSheet, View } from '@react-pdf/renderer'
import Icons from '#cv/icons/icons'
import { FONT_SIZES } from '#cv/utils/constants'

const styles = StyleSheet.create({
	contactLinks: {},
	contactLink: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
	contactLinkText: {
		fontSize: FONT_SIZES.medium,
		textDecoration: 'none',
	},
})

export default function ContactLinks() {
	return (
		<View style={styles.contactLinks}>
			<View style={styles.contactLink}>
				<Icons.WorldWww size={13} />
				<Link style={styles.contactLinkText} src="https://xeraph.dev">
					xeraph.dev
				</Link>
			</View>
			<View style={styles.contactLink}>
				<Icons.BrandGithub size={13} />
				<Link style={styles.contactLinkText} src="https://github.com/xeraph-dev">
					github.com/xeraph-dev
				</Link>
			</View>
			<View style={styles.contactLink}>
				<Icons.BrandLinkedIn size={13} />
				<Link style={styles.contactLinkText} src="https://www.linkedin.com/in/adrian-l%C3%B3pez/">
					linkedin.com/in/adrian-lópez
				</Link>
			</View>
			<View style={styles.contactLink}>
				<Icons.BrandGMail size={13} />
				<Link style={styles.contactLinkText} src="mailto:xeraphdev@gmail.com">
					xeraphdev@gmail.com
				</Link>
			</View>
		</View>
	)
}
