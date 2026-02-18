'use client';

import { useEffect } from 'react';
import { registerVisit } from '@/lib/register-visit';

export default function VisitTracker() {
	useEffect(() => {
		const hasVisited = sessionStorage.getItem('visited');
		if (!hasVisited) {
			registerVisit();
			sessionStorage.setItem('visited', 'true');
		}
	}, []);

	return null;
}