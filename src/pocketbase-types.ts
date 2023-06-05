/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Books = "books",
	Film = "film",
	Series = "series",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type BooksRecord = {
	title?: string
	authors?: string
	average_rating?: number
	isbn?: number
	isbn13?: number
	language_code?: string
	num_pages?: number
	ratings_count?: number
	text_reviews_count?: number
	publication_date?: IsoDateString
	publisher?: string
	FIELD13?: string
}

export type FilmRecord = {
	Series_Title?: string
	Released_Year?: number
	Certificate?: string
	Runtime?: string
	Genre?: string
	IMDB_Rating?: number
	Overview?: string
	Meta_score?: number
	Director?: string
	Star1?: string
	Star2?: string
	Star3?: string
	Star4?: string
	Gross?: string
	Poster_Link?: string
	No_of_Votes?: number
}

export type SeriesRecord = {
	Poster_Link?: string
	Series_Title?: string
	Runtime_of_Series?: string
	Certificate?: string
	Runtime_of_Episodes?: string
	Genre?: string
	IMDB_Rating?: number
	Overview?: string
	Star1?: string
	Star2?: string
	Star3?: string
	Star4?: string
	No_of_Votes?: number
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type BooksResponse = Required<BooksRecord> & BaseSystemFields
export type FilmResponse = Required<FilmRecord> & BaseSystemFields
export type SeriesResponse = Required<SeriesRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	books: BooksRecord
	film: FilmRecord
	series: SeriesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	books: BooksResponse
	film: FilmResponse
	series: SeriesResponse
	users: UsersResponse
}