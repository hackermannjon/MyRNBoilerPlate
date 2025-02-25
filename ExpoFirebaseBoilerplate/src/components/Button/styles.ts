import { createStyles, theme } from "../../theme/unistyles";

export const styles = createStyles({
  button: {
    backgroundColor: theme.Colors.primary,
    paddingVertical: theme.Paddings.medium,
    paddingHorizontal: theme.Paddings.large,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    color: theme.Colors.background,
    fontFamily: theme.Fonts.primary,
    fontSize: 16,
  },
});
