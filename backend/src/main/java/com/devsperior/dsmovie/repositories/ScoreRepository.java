package com.devsperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsperior.dsmovie.entities.Score;
import com.devsperior.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	
}
