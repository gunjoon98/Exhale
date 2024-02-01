package com.ssafy.exhale.repository.rehabilitationRepository;

import com.ssafy.exhale.domain.rehabilitation.Category;
import com.ssafy.exhale.domain.rehabilitation.FluencyProblem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FluencyProblemRepository extends JpaRepository<FluencyProblem, Long> {
    List<FluencyProblem> findByCategory(Category category);
}

