import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSecured: null,
	runsMap: "",
	canHavePassword: true,
	canBeEmpty: true,
	isEmpty: null,
	canBeFull: true,
	runsAppId: null,
	notAppId: null,
	hasTags: "",
	matchName: null,
	matchVersion: null,
	restrictUniqueIp: null,
	onAddress: null,
	whitelisted: null,
	spectatorProxy: false,
	isDedicated: null,
	runsLinux: null,
	hasGameDir: null,
	location: null
};

const filtersSlice = createSlice({
  name: 'filters',
	initialState,
	reducers: {
		setIsSecured: (state, action) => {
			state.isSecured = action.payload;
		},
		setRunsMap: (state, action) => {
			state.runsMap = action.payload;
		},
		setCanHavePassword: (state, action) => {
			state.canHavePassword = action.payload;
		},
		setCanBeEmpty: (state, action) => {
			state.canBeEmpty = action.payload;
		},
		setIsEmpty: (state, action) => {
			state.isEmpty = action.payload;
		},
		setCanBeFull: (state, action) => {
			state.canBeFull = action.payload;
		},
		setRunsAppId: (state, action) => {
			state.runsAppId = action.payload;
		},
		setNotAppId: (state, action) => {
			state.notAppId = action.payload;
		},
		setHasTags: (state, action) => {
			state.hasTags = action.payload;
		},
		setMatchName: (state, action) => {
			state.matchName = action.payload;
		},
		setMatchVersion: (state, action) => {
			state.matchVersion = action.payload;
		},
		setRestrictUniqueIp: (state, action) => {
			state.restrictUniqueIp = action.payload;
		},
		setOnAddress: (state, action) => {
			state.onAddress = action.payload;
		},
		setWhitelisted: (state, action) => {
			state.whitelisted = action.payload;
		},
		setSpectatorProxy: (state, action) => {
			state.spectatorProxy = action.payload;
		},
		setIsDedicated: (state, action) => {
			state.isDedicated = action.payload;
		},
		setRunsLinux: (state, action) => {
			state.runsLinux = action.payload;
		},
		setHasGameDir: (state, action) => {
			state.hasGameDir = action.payload;
		},
		setLocation: (state, action) => {
			state.location = action.payload;
		},
	},
});

export const {
  setIsSecured,
	setRunsMap,
	setCanHavePassword,
	setCanBeEmpty,
	setIsEmpty,
	setCanBeFull,
	setRunsAppId,
	setNotAppId,
	setHasTags,
	setMatchName,
	setMatchVersion,
	setRestrictUniqueIp,
	setOnAddress,
	setWhitelisted,
	setSpectatorProxy,
	setIsDedicated,
	setRunsLinux,
	setHasGameDir,
	setLocation
} = filtersSlice.actions;
export default filtersSlice.reducer;
